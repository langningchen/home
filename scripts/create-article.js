#!/usr/bin/env node

/**
 * Article Generator Script
 * 
 * This script helps you create new articles for your blog.
 * Usage: node scripts/create-article.js "Article Title" --category "Category" --tags "tag1,tag2,tag3"
 */

const fs = require('fs')
const path = require('path')

// Parse command line arguments
const args = process.argv.slice(2)
const title = args[0]
const categoryFlag = args.indexOf('--category')
const tagsFlag = args.indexOf('--tags')

if (!title) {
    console.error('Please provide an article title')
    console.error('Usage: node scripts/create-article.js "Article Title" --category "Category" --tags "tag1,tag2,tag3"')
    process.exit(1)
}

// Generate article ID from title
const articleId = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')

const category = categoryFlag !== -1 && args[categoryFlag + 1] ? args[categoryFlag + 1] : 'General'
const tags = tagsFlag !== -1 && args[tagsFlag + 1] ? args[tagsFlag + 1].split(',').map(tag => tag.trim()) : []

const currentDate = new Date().toISOString().split('T')[0]

// Create article directory
const articleDir = path.join(__dirname, '..', 'src', 'articles', articleId)
if (!fs.existsSync(articleDir)) {
    fs.mkdirSync(articleDir, { recursive: true })
}

// Create main.tsx file
const mainContent = `import { ReactNode } from "react"
import { Fade } from "react-awesome-reveal"
import Article from "../Article"

export default class ${title.replace(/[^a-zA-Z0-9]/g, '')} extends Article {
    public static title = "${title}";
    public static date = new Date("${currentDate}");
    public static description = "Add your article description here...";

    render(): ReactNode {
        return (
            <Fade triggerOnce>
                <p>
                    Start writing your article content here...
                </p>
                
                <p>
                    You can use JSX elements, images, code blocks, and more.
                </p>
                
                {/* Example image usage:
                <p><ArticleImage src={imageImport} /></p>
                */}
                
                {/* Example code block:
                <pre><code>
                    console.log("Hello, World!");
                </code></pre>
                */}
            </Fade>
        )
    }
}
`

const mainPath = path.join(articleDir, 'main.tsx')
fs.writeFileSync(mainPath, mainContent)

// Update articlesConfig.ts
const configPath = path.join(__dirname, '..', 'src', 'articles', 'articlesConfig.ts')
const configContent = fs.readFileSync(configPath, 'utf8')

// Add import statement
const importLine = `import ${title.replace(/[^a-zA-Z0-9]/g, '')} from "./${articleId}/main"`
const importSection = configContent.split('// Articles configuration with metadata')[0]
const configSection = configContent.split('// Articles configuration with metadata')[1]

// Add to articles config
const newConfigEntry = `  "${articleId}": {
    id: "${articleId}",
    component: ${title.replace(/[^a-zA-Z0-9]/g, '')},
    category: "${category}",
    tags: [${tags.map(tag => `"${tag}"`).join(', ')}],
    featured: false
  },`

const updatedConfig = importSection + importLine + '\n' + '// Articles configuration with metadata' + configSection.replace(
    'export const articlesConfig: Record<string, ArticleMetadata> = {',
    `export const articlesConfig: Record<string, ArticleMetadata> = {\n${newConfigEntry}`
)

fs.writeFileSync(configPath, updatedConfig)

console.log(`✅ Article "${title}" created successfully!`)
console.log(`📁 Directory: ${articleDir}`)
console.log(`📝 Main file: ${mainPath}`)
console.log(`🔧 Config updated: ${configPath}`)
console.log('')
console.log('Next steps:')
console.log('1. Edit the main.tsx file to add your content')
console.log('2. Add any images to the article directory')
console.log('3. Update the description in the main.tsx file')
console.log('4. Set featured: true in articlesConfig.ts if this is a featured article')
