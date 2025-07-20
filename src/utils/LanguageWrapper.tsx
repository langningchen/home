import { ReactNode, useEffect } from 'react';
import { Outlet } from 'react-router';
import i18n, { SupportedLanguage } from './i18n';

interface LanguageWrapperProps {
    lng: SupportedLanguage;
}

export default function LanguageWrapper({ lng }: LanguageWrapperProps): ReactNode {
    useEffect(() => {
        if (lng && i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }
    }, [lng]);
    return <Outlet />;
}
