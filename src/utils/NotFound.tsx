import { ReactNode } from "react"
import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import useUrlLang from "./useUrlLang"

export default function NotFound(): ReactNode {
  const { t } = useTranslation();
  const { prefix } = useUrlLang();
  const navigate = useNavigate();

  return (
    <div className="text-center py-5">
      <div className="display-1 text-muted mb-4">404</div>
      <h1 className="mb-3">{t('notFound.title')}</h1>
      <p className="mb-4 text-muted">{t('notFound.message')}</p>
      <Button onClick={() => {
        navigate(`${prefix}/home`);
      }} variant="primary">
        <i className="bi bi-house-fill me-2"></i>
        {t('notFound.goHome')}
      </Button>
    </div>
  )
}
