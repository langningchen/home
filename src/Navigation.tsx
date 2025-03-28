import NavigationItem from "./NavigationItem"

function Navigation() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-sm-3 text-white bg-dark-subtle">
      <ul className="nav nav-pills flex-row flex-sm-column justify-content-evenly justify-content-sm-start">
        <NavigationItem icon="person-fill" text="Home" />
        <NavigationItem icon="file-text-fill" text="Blog" />
        <NavigationItem icon="file-earmark-code-fill" text="Projects" />
      </ul>
    </div>
  )
}

export default Navigation
