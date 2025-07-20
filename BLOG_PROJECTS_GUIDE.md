# Blog & Projects System

This document explains how to use the enhanced blog and projects system.

## Articles System

### Creating a New Article

Use the automated script to create new articles:

```bash
# Basic usage
pnpm create-article "My New Article Title"

# With category and tags
pnpm create-article "Advanced TypeScript Tips" --category "Technology" --tags "typescript,programming,tips"
```

This will:
1. Create a new directory in `src/articles/`
2. Generate a `main.tsx` file with the article template
3. Automatically update `articlesConfig.ts`

### Manual Article Creation

1. Create a new directory in `src/articles/your-article-id/`
2. Create `main.tsx` following this template:

```tsx
import { ReactNode } from "react"
import { Fade } from "react-awesome-reveal"
import Article from "../Article"

export default class YourArticle extends Article {
    public static title = "Your Article Title";
    public static date = new Date("2025-01-20");
    public static description = "Brief description of your article";

    render(): ReactNode {
        return (
            <Fade triggerOnce>
                <p>Your article content...</p>
            </Fade>
        )
    }
}
```

3. Add your article to `src/articles/articlesConfig.ts`:

```typescript
// Import your article
import YourArticle from "./your-article-id/main"

// Add to articlesConfig
"your-article-id": {
  id: "your-article-id",
  component: YourArticle,
  category: "Technology",
  tags: ["tag1", "tag2"],
  featured: true // Set to true for featured articles
}
```

### Article Features

- **Categories**: Organize articles by topic
- **Tags**: Add searchable tags to articles
- **Featured**: Mark important articles as featured
- **Automatic sorting**: Articles sorted by date (newest first)
- **Read time estimation**: Automatically calculated
- **Responsive design**: Follows Settings page style
- **Dark mode support**: Adapts to theme

### Adding Images

1. Place images in your article directory
2. Import and use them:

```tsx
import myImage from "./my-image.jpg"
import ArticleImage from "../ArticleImage"

// In your render method:
<ArticleImage src={myImage} alt="Description" />
```

## Projects System

### Featured Projects

Edit the `featuredProjects` array in `src/projects/Projects.tsx`:

```typescript
const featuredProjects = [
  {
    id: "my-project",
    title: "My Awesome Project",
    description: "Detailed description of what this project does",
    image: null, // Optional: add image URL
    technologies: ["React", "TypeScript", "Node.js"],
    status: "Active", // or "Maintained by Team", "Archived", etc.
    links: {
      github: "https://github.com/username/repo",
      website: "https://myproject.com" // optional
    }
  }
]
```

### GitHub Integration

The system automatically fetches your repositories from GitHub API:
- Displays public repositories only
- Sorts by stars and recent activity
- Shows language, stars, forks, and topics
- Real-time data from GitHub

### Customizing Repository Display

The GitHub section automatically handles:
- Loading states with placeholders
- Error handling
- Repository metadata (language, stars, forks)
- Topics as badges
- Last updated timestamps

## Styling

Both Articles and Projects use consistent styling:
- Card-based layout matching Settings page
- Hover effects and animations
- Responsive design
- Dark mode support
- Bootstrap-based components

## File Structure

```
src/
├── articles/
│   ├── articlesConfig.ts     # Article metadata and configuration
│   ├── Articles.tsx          # Article list and detail views
│   ├── Articles.scss         # Article styling
│   ├── Article.tsx           # Base article class
│   └── your-article-id/
│       ├── main.tsx          # Article component
│       └── images...         # Article assets
├── projects/
│   ├── Projects.tsx          # Projects page with featured and GitHub repos
│   └── Projects.scss         # Projects styling
└── scripts/
    └── create-article.js     # Article creation script
```

## Development Workflow

1. **Creating Articles**: Use `pnpm create-article` for new articles
2. **Adding Images**: Place in article directory and import
3. **Updating Projects**: Edit featured projects array as needed
4. **Testing**: Use `pnpm dev` to see changes locally
5. **Building**: Use `pnpm build` for production

## Tips

- Keep article IDs lowercase with hyphens
- Use descriptive categories and tags
- Add meaningful descriptions for SEO
- Test responsiveness on different screen sizes
- Featured projects appear before GitHub repositories
- GitHub data refreshes on each page load
