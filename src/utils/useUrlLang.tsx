import { DEFAULT_LANG, SUPPORTED_LANGS } from "./i18n";

const useUrlLang = () => {
    let pathnameSplit = window.location.pathname.split("/");
    let lang = pathnameSplit[1];
    let path = pathnameSplit.slice(2).join("/");
    let prefix = "/" + lang;
    if (SUPPORTED_LANGS.indexOf(lang) == -1) {
        path = lang + "/" + path;
        prefix = "";
        lang = DEFAULT_LANG;
    }
    return { path, lang, prefix }
};

export default useUrlLang;
