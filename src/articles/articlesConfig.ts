import Article from "./Article"

// Article metadata interface
export interface ArticleMetadata {
    id: string
    component: typeof Article
    category?: string
    tags?: string[]
    featured?: boolean
}

// Import all article components
import IntroductionAboutMe from "./introduction-about-me/main"
import AboutLlama4 from "./about-llama4/main"

// Articles configuration with metadata
export const articlesConfig: Record<string, ArticleMetadata> = {
    "introduction-about-me": {
        id: "introduction-about-me",
        component: IntroductionAboutMe,
        category: "Personal",
        tags: ["introduction", "programming", "journey"],
        featured: true
    },
    "about-llama4": {
        id: "about-llama4",
        component: AboutLlama4,
        category: "Technology",
        tags: ["ai", "llama", "technology"],
        featured: false
    }
}

// Helper functions
export const getArticleById = (id: string): ArticleMetadata | undefined => {
    return articlesConfig[id]
}

export const getAllArticles = (): ArticleMetadata[] => {
    return Object.values(articlesConfig)
}

export const getFeaturedArticles = (): ArticleMetadata[] => {
    return getAllArticles().filter(article => article.featured)
}

export const getArticlesByCategory = (category: string): ArticleMetadata[] => {
    return getAllArticles().filter(article => article.category === category)
}

export const getArticlesByTag = (tag: string): ArticleMetadata[] => {
    return getAllArticles().filter(article => article.tags?.includes(tag))
}

// Get all unique categories
export const getCategories = (): string[] => {
    const categories = getAllArticles()
        .map(article => article.category)
        .filter(Boolean) as string[]
    return [...new Set(categories)]
}

// Get all unique tags
export const getTags = (): string[] => {
    const tags = getAllArticles()
        .flatMap(article => article.tags || [])
    return [...new Set(tags)]
}

// Search articles by text (title, description, category, tags)
export const searchArticles = (searchTerm: string): ArticleMetadata[] => {
    if (!searchTerm.trim()) return getAllArticles()

    const term = searchTerm.toLowerCase()
    return getAllArticles().filter(article => {
        const titleMatch = article.component.title.toLowerCase().includes(term)
        const descMatch = article.component.description.toLowerCase().includes(term)
        const categoryMatch = article.category?.toLowerCase().includes(term) || false
        const tagsMatch = article.tags?.some(tag => tag.toLowerCase().includes(term)) || false

        return titleMatch || descMatch || categoryMatch || tagsMatch
    })
}

// Enhanced filtering with multiple criteria
export interface ArticleFilters {
    category?: string
    tags?: string[]
    featured?: boolean
    searchTerm?: string
}

export const getFilteredArticles = (filters: ArticleFilters): ArticleMetadata[] => {
    let articles = getAllArticles()

    if (filters.searchTerm) {
        articles = searchArticles(filters.searchTerm)
    }

    if (filters.category) {
        articles = articles.filter(article => article.category === filters.category)
    }

    if (filters.tags && filters.tags.length > 0) {
        articles = articles.filter(article =>
            filters.tags!.some(tag => article.tags?.includes(tag))
        )
    }

    if (filters.featured !== undefined) {
        articles = articles.filter(article => article.featured === filters.featured)
    }

    return articles
}
