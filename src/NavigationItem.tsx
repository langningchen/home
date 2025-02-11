import { NavLink } from "react-router-dom";

interface NavigationItemProps {
  icon: string;
  text: string;
}

function NavigationItem({ icon, text }: NavigationItemProps) {
  return (
    <NavLink className={({ isActive }) => {
      return [
        "m-2 d-flex flex-column align-items-center",
        "flex-sm-row align-items-sm-start fs-4 fw-bold font-monospace",
        "text-decoration-none",
        isActive ? "text-body" : "text-body-secondary",
      ].join(" ")
    }}
      role="button"
      to={text.toLowerCase()}
    >
      <div className={`bi bi-${icon}`}>
      </div>
      <div className="d-none d-sm-block ms-2">
        {text}
      </div>
    </NavLink>
  )
}

export default NavigationItem
