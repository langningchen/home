import { ReactNode } from "react";
import NavigationItem from "./NavigationItem";

export default function Navigation(): ReactNode {
  return (
    <nav className="navigation-bar d-flex flex-column flex-shrink-0 p-1 p-sm-2 p-md-3" aria-label="Main navigation">
      <ul className="nav nav-pills flex-row flex-sm-column justify-content-evenly justify-content-sm-start mb-0 gap-1" role="list">
        <NavigationItem icon="person-fill" text="Home" />
        <NavigationItem icon="file-text-fill" text="Articles" />
        <NavigationItem icon="file-earmark-code-fill" text="Projects" />
        <NavigationItem icon="gear-fill" text="Settings" />
      </ul>
    </nav>
  );
}
