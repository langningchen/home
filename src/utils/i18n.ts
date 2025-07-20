import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const DEFAULT_LANG = 'en-US';
export const SUPPORTED_LANGS = ['en-US', 'zh-CN'] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGS[number];

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: process.env.NODE_ENV === 'development',
        fallbackLng: DEFAULT_LANG,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            'en-US': {
                translation: {
                    navigation: {
                        home: 'Home',
                        articles: 'Articles',
                        projects: 'Projects',
                        settings: 'Settings',
                    },
                    home: {
                        greeting: 'Hello! I am',
                        role: {
                            option1: 'a high school student',
                            option2: 'a software engineer',
                            option3: 'a web developer',
                            option4: 'an open-source contributor',
                            option5: 'an OIer',
                        },
                    },
                    settings: {
                        settings: 'Settings',
                        language: 'Language',
                        theme: 'Theme',
                        darkMode: 'Dark Mode',
                        lightMode: 'Light Mode',
                        darkModeDescription: 'Dark theme with reduced eye strain',
                        lightModeDescription: 'Light theme for better readability',
                        about: 'About',
                        aboutDescription: 'Configure your language and appearance preferences here. Changes are saved automatically.',
                        selected: 'Selected',
                    },
                    notFound: {
                        title: 'Page Not Found',
                        message: 'The page you are looking for does not exist.',
                        goHome: 'Go Home',
                    },
                    articles: {
                        title: 'Articles',
                        description: 'Read my thoughts, experiences, and technical insights',
                        allArticles: 'All Articles',
                        about: 'About Articles',
                        aboutDescription: 'Here you can find my latest articles about programming, technology, and personal experiences.',
                        notFound: 'Article Not Found',
                        notFoundMessage: 'The article you are looking for does not exist.',
                        backToArticles: 'Back to Articles',
                        featured: 'Featured',
                        readTime: 'Read time',
                    },
                    projects: {
                        title: 'Projects',
                        description: 'Explore my featured projects and open-source contributions',
                        featured: 'Featured Projects',
                        allRepos: 'All Repositories',
                        repositoryList: 'Repository List',
                        about: 'About Projects',
                        aboutDescription: 'These are my open-source projects and contributions. The repositories are automatically fetched from my GitHub profile.',
                        github: 'GitHub',
                        visit: 'Visit',
                        active: 'Active',
                        maintainedByTeam: 'Maintained by Team',
                        archived: 'Archived',
                        loadingRepos: 'Loading repositories...',
                        errorLoadingRepos: 'Error loading repositories',
                        noReposFound: 'No repositories found',
                        featuredInfo: 'Featured projects are manually curated',
                        sortedInfo: 'Repositories sorted by stars and activity',
                        autoUpdatedInfo: 'Auto-updated from GitHub API',
                    }
                }
            },
            'zh-CN': {
                translation: {
                    navigation: {
                        home: '主页',
                        articles: '文章',
                        projects: '项目',
                        settings: '设置',
                    },
                    home: {
                        greeting: '你好！我是',
                        role: {
                            option1: '一名高中生',
                            option2: '一名软件工程师',
                            option3: '一名网页开发者',
                            option4: '一名开源贡献者',
                            option5: '一名 OIer',
                        },
                    },
                    settings: {
                        settings: '设置',
                        language: '语言',
                        theme: '主题',
                        darkMode: '深色模式',
                        lightMode: '浅色模式',
                        darkModeDescription: '深色主题，减少眼疲劳',
                        lightModeDescription: '浅色主题，提高可读性',
                        about: '关于',
                        aboutDescription: '在这里配置您的语言和外观偏好设置。更改将自动保存。',
                        selected: '已选择',
                    },
                    notFound: {
                        title: '页面未找到',
                        message: '您要找的页面不存在。',
                        goHome: '回到主页',
                    },
                    articles: {
                        title: '文章',
                        description: '阅读我的思考、经验和技术见解',
                        allArticles: '所有文章',
                        about: '关于文章',
                        aboutDescription: '在这里您可以找到我关于编程、技术和个人经历的最新文章。',
                        notFound: '文章未找到',
                        notFoundMessage: '您要找的文章不存在。',
                        backToArticles: '返回文章列表',
                        featured: '精选',
                        readTime: '阅读时间',
                    },
                    projects: {
                        title: '项目',
                        description: '探索我的精选项目和开源贡献',
                        featured: '精选项目',
                        allRepos: '所有仓库',
                        repositoryList: '仓库列表',
                        about: '关于项目',
                        aboutDescription: '这些是我的开源项目和贡献。仓库信息会自动从我的 GitHub 个人资料中获取。',
                        github: 'GitHub',
                        visit: '访问',
                        active: '活跃',
                        maintainedByTeam: '团队维护',
                        archived: '已归档',
                        loadingRepos: '加载仓库中...',
                        errorLoadingRepos: '加载仓库时出错',
                        noReposFound: '未找到仓库',
                        featuredInfo: '精选项目是手动策划的',
                        sortedInfo: '仓库按 star 数和活跃度排序',
                        autoUpdatedInfo: '通过 GitHub API 自动更新',
                    }
                }
            },
        },
    });

export default i18n;
