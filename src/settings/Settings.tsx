import { ReactNode, useCallback, useMemo } from 'react';
import { Card, ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import useUrlLang from '../utils/useUrlLang';
import { useTheme } from '../utils/ThemeContext';
import { SUPPORTED_LANGS, SupportedLanguage } from '../utils/i18n';

const languageNames: Record<SupportedLanguage, { native: string; english: string; flag: string }> = {
    'en-US': { native: 'English', english: 'English', flag: '🇺🇸' },
    'zh-CN': { native: '中文', english: 'Chinese', flag: '🇨🇳' }
};

export default function Settings(): ReactNode {
    const { lang, prefix } = useUrlLang();
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    // Performance optimization: memoize the language change handler
    const changeLanguage = useCallback((newLang: SupportedLanguage) => {
        if (newLang === lang) return;

        const pathWithoutLang = location.pathname.replace(prefix, '');
        const newPath = `/${newLang}${pathWithoutLang}${location.search}${location.hash}`;
        navigate(newPath, { replace: true });
    }, [lang, location.pathname, location.search, location.hash, prefix, navigate]);

    // Performance optimization: memoize theme toggle
    const handleThemeToggle = useCallback((targetTheme: 'light' | 'dark') => {
        if (theme !== targetTheme) {
            toggleTheme();
        }
    }, [theme, toggleTheme]);

    // Memoize language items for better performance
    const languageItems = useMemo(() =>
        SUPPORTED_LANGS.map((supportedLang) => (
            <ListGroup.Item
                key={supportedLang}
                as="button"
                action
                active={lang === supportedLang}
                onClick={() => changeLanguage(supportedLang)}
                className="d-flex justify-content-between align-items-center text-start settings-item p-2 p-sm-3"
                aria-label={`${t('settings.language')}: ${languageNames[supportedLang].native}`}
                aria-current={lang === supportedLang ? 'true' : 'false'}
            >
                <div className="d-flex align-items-center flex-grow-1 me-2">
                    <span className="me-2 me-sm-3 flex-shrink-0" role="img" aria-label={languageNames[supportedLang].english}>
                        {languageNames[supportedLang].flag}
                    </span>
                    <div className="flex-grow-1">
                        <div className="fw-semibold fs-6">{languageNames[supportedLang].native}</div>
                        <div className="text-muted small d-none d-sm-block">
                            {languageNames[supportedLang].english}
                        </div>
                    </div>
                </div>
                {lang === supportedLang && (
                    <Badge bg="primary" aria-label={t('settings.selected')} className="flex-shrink-0">
                        <i className="bi bi-check-lg" aria-hidden="true"></i>
                        <span className="visually-hidden">Selected</span>
                    </Badge>
                )}
            </ListGroup.Item>
        ))
        , [lang, changeLanguage, t]);

    return (
        <div className="settings-container px-1 px-sm-2 px-md-3">
            {/* Skip to content link for accessibility */}
            <a href="#main-settings" className="visually-hidden-focusable">
                Skip to main settings
            </a>

            <header className="mb-3 mb-sm-4">
                <h1 className="mb-2 fs-3 fs-sm-2 fs-md-1" id="settings-title">
                    <i className="bi bi-gear-fill me-2 me-sm-3" aria-hidden="true"></i>
                    {t('settings.settings')}
                </h1>
                <p className="text-muted mb-0 fs-6 fs-sm-5" id="settings-description">
                    {t('settings.aboutDescription')}
                </p>
            </header>

            <Row className="g-2 g-sm-3 g-lg-4" id="main-settings">
                <Col xs={12} lg={8}>
                    {/* Language Settings */}
                    <Card className="mb-3 mb-sm-4">
                        <Card.Header className="p-2 p-sm-3">
                            <h2 className="h6 h-sm-5 mb-0">
                                <i className="bi bi-globe me-1 me-sm-2" aria-hidden="true"></i>
                                {t('settings.language')}
                            </h2>
                        </Card.Header>
                        <ListGroup
                            variant="flush"
                            role="radiogroup"
                            aria-labelledby="language-section"
                            id="language-section"
                        >
                            {languageItems}
                        </ListGroup>
                    </Card>

                    {/* Theme Settings */}
                    <Card>
                        <Card.Header className="p-2 p-sm-3">
                            <h2 className="h6 h-sm-5 mb-0">
                                <i className="bi bi-palette me-1 me-sm-2" aria-hidden="true"></i>
                                {t('settings.theme')}
                            </h2>
                        </Card.Header>
                        <ListGroup
                            variant="flush"
                            role="radiogroup"
                            aria-labelledby="theme-section"
                            id="theme-section"
                        >
                            <ListGroup.Item
                                as="button"
                                action
                                active={theme === 'light'}
                                onClick={() => handleThemeToggle('light')}
                                className="d-flex justify-content-between align-items-center text-start settings-item p-2 p-sm-3"
                                aria-label={`${t('settings.theme')}: ${t('settings.lightMode')}`}
                                aria-current={theme === 'light' ? 'true' : 'false'}
                            >
                                <div className="d-flex align-items-center flex-grow-1 me-2">
                                    <i className="bi bi-sun-fill me-2 me-sm-3 flex-shrink-0" aria-hidden="true"></i>
                                    <div className="flex-grow-1">
                                        <div className="fw-semibold fs-6">{t('settings.lightMode')}</div>
                                        <div className="text-muted small d-none d-sm-block">
                                            {t('settings.lightModeDescription')}
                                        </div>
                                    </div>
                                </div>
                                {theme === 'light' && (
                                    <Badge bg="primary" aria-label={t('settings.selected')} className="flex-shrink-0">
                                        <i className="bi bi-check-lg" aria-hidden="true"></i>
                                        <span className="visually-hidden">Selected</span>
                                    </Badge>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="button"
                                action
                                active={theme === 'dark'}
                                onClick={() => handleThemeToggle('dark')}
                                className="d-flex justify-content-between align-items-center text-start settings-item p-2 p-sm-3"
                                aria-label={`${t('settings.theme')}: ${t('settings.darkMode')}`}
                                aria-current={theme === 'dark' ? 'true' : 'false'}
                            >
                                <div className="d-flex align-items-center flex-grow-1 me-2">
                                    <i className="bi bi-moon-fill me-2 me-sm-3 flex-shrink-0" aria-hidden="true"></i>
                                    <div className="flex-grow-1">
                                        <div className="fw-semibold fs-6">{t('settings.darkMode')}</div>
                                        <div className="text-muted small d-none d-sm-block">
                                            {t('settings.darkModeDescription')}
                                        </div>
                                    </div>
                                </div>
                                {theme === 'dark' && (
                                    <Badge bg="primary" aria-label={t('settings.selected')} className="flex-shrink-0">
                                        <i className="bi bi-check-lg" aria-hidden="true"></i>
                                        <span className="visually-hidden">Selected</span>
                                    </Badge>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>

                <Col xs={12} lg={4}>
                    <Card className="bg-body-secondary h-100">
                        <Card.Body className="p-2 p-sm-3">
                            <h3 className="h6 card-title">
                                <i className="bi bi-info-circle me-1 me-sm-2" aria-hidden="true"></i>
                                {t('settings.about')}
                            </h3>
                            <p className="card-text small mb-0">
                                {t('settings.aboutDescription')}
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
