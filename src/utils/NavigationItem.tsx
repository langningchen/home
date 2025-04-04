import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

interface NavigationItemProps {
  icon: string;
  text: string;
}

function NavigationItem({ icon, text }: NavigationItemProps) {
  return (
    <NavItem className="p-1">
      <NavLink className={({ isActive }) => {
        return [
          "nav-link",
          isActive ? "active" : "",
        ].join(" ")
      }}
        role="button"
        to={text.toLowerCase()}
      >
        <div className="d-flex flex-sm-row flex-column align-items-center">
          <i className={`bi bi-${icon} me-sm-2`}></i>
          <div className="d-sm-flex d-none">{text}</div>
        </div>
      </NavLink>
    </NavItem>
  )
}

export default NavigationItem
