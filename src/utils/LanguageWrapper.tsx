import { useEffect } from 'react';
import { Outlet } from 'react-router';
import i18n from './i18n';

export default function LanguageWrapper({ lng }: { lng: string }) {
    useEffect(() => {
        if (lng && i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }
    }, [lng]);
    return <Outlet />;
}
