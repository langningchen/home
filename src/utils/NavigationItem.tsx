import { ReactNode } from "react"
import { NavItem } from "react-bootstrap"
import { NavLink } from "react-router"
import { useTranslation } from "react-i18next"
import useUrlLang from "./useUrlLang"

interface NavigationItemProps {
  icon: string;
  text: string;
}

export default function NavigationItem({ icon, text }: NavigationItemProps): ReactNode {
  const { prefix } = useUrlLang();
  const { t } = useTranslation();
  const translatedText = t(`navigation.${text.toLowerCase()}`);

  return (
    <NavItem className="p-1">
      <NavLink
        className={({ isActive }) => [
          "nav-link",
          isActive ? "active" : "",
        ].join(" ")}
        to={`${prefix}/${text.toLowerCase()}`}
        aria-label={translatedText}
        title={translatedText}
      >
        <div className="d-flex flex-sm-row flex-column align-items-center">
          <i className={`bi bi-${icon} me-sm-2`} aria-hidden="true"></i>
          <div className="d-sm-flex d-none">
            {translatedText}
          </div>
          <span className="d-sm-none visually-hidden">
            {translatedText}
          </span>
        </div>
      </NavLink>
    </NavItem>
  )
}
