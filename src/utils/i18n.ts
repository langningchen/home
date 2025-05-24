import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const DEFAULT_LANG = 'en-US';
export const SUPPORTED_LANGS = [
    'en-US',
    'zh-CN',
];

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    home: {
                        name: {
                            part1: '👋 Hello! I am',
                            part2: 'Langning Chen',
                        },
                        role: {
                            option1: 'a high school student',
                            option2: 'a software engineer',
                            option3: 'a web developer',
                            option4: 'an open-source contributor',
                            option5: 'an OIer',
                        },
                    },
                }
            },
            zh: {
                translation: {
                    home: {
                        name: {
                            part1: '👋 你好！我是',
                            part2: '陈朗宁',
                        },
                        role: {
                            option1: '一名高中生',
                            option2: '一名软件工程师',
                            option3: '一名网页开发者',
                            option4: '一名开源贡献者',
                            option5: '一名信奥赛选手',
                        },
                    },
                }
            },
        },
    });

export default i18n;
