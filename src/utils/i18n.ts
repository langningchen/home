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
                    }
                }
            },
        },
    });

export default i18n;
