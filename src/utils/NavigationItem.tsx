import { Component, ReactNode } from "react"
import { NavItem } from "react-bootstrap"
import { NavLink } from "react-router"
import useUrlLang from "./useUrlLang";

export default class NavigationItem extends Component<{
  icon: string
  text: string
}> {
  render(): ReactNode {
    const { lang } = useUrlLang();

    return (
      <NavItem className="p-1" >
        <NavLink className={({ isActive }) => {
          return [
            "nav-link",
            isActive ? "active" : "",
          ].join(" ")
        }}
          role="button"
          to={`${lang}/${this.props.text.toLowerCase()}`}
        >
          <div className="d-flex flex-sm-row flex-column align-items-center">
            <i className={`bi bi-${this.props.icon} me-sm-2`}></i>
            <div className="d-sm-flex d-none">{this.props.text}</div>
          </div>
        </NavLink>
      </NavItem>
    )
  }
}
