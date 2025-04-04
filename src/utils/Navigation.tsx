import { Component, ReactNode } from "react"
import NavigationItem from "./NavigationItem"

export default class Navigation extends Component {
  render(): ReactNode {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-sm-3 text-white bg-dark-subtle">
        <ul className="nav nav-pills flex-row flex-sm-column justify-content-evenly justify-content-sm-start">
          <NavigationItem icon="person-fill" text="Home" />
          <NavigationItem icon="file-text-fill" text="Articles" />
          <NavigationItem icon="file-earmark-code-fill" text="Projects" />
        </ul>
      </div>
    )
  }
}
