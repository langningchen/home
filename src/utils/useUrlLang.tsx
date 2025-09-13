import { useNavigate, useLocation } from "react-router";
import { DEFAULT_LANG, SUPPORTED_LANGS, SupportedLanguage } from "./i18n";
import { useEffect, useMemo } from "react";

interface UrlLangResult {
    lang: SupportedLanguage;
    prefix: string;
    isValidPath: boolean;
}

const useUrlLang = (): UrlLangResult => {
    const navigate = useNavigate();
    const location = useLocation();

    const result = useMemo(() => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const firstSegment = pathSegments[0];

        if (SUPPORTED_LANGS.includes(firstSegment as SupportedLanguage)) {
            return {
                lang: firstSegment as SupportedLanguage,
                prefix: `/${firstSegment}`,
                isValidPath: true
            };
        }

        const browserLang = navigator.language as SupportedLanguage;
        const detectedLang = SUPPORTED_LANGS.includes(browserLang)
            ? browserLang
            : DEFAULT_LANG;

        return {
            lang: detectedLang,
            prefix: `/${detectedLang}`,
            isValidPath: false
        };
    }, [location.pathname]);

    useEffect(() => {
        if (!result.isValidPath) {
            const pathWithoutLang = location.pathname === "/" ? "/home" : location.pathname;
            const newPath = `${result.prefix}${pathWithoutLang}${location.search}${location.hash}`;
            navigate(newPath, { replace: true });
        }
    }, [result, location, navigate]);

    return result;
};

export default useUrlLang;
