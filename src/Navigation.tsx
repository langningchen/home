import NavigationItem from "./NavigationItem"

function Navigation() {
  return (
    <div className="d-flex flex-row justify-content-around flex-sm-column justify-content-sm-start me-sm-3 pe-sm-4 pt-sm-4">
      <NavigationItem icon="person-fill" text="Home" />
      <NavigationItem icon="file-text-fill" text="Blog" />
      <NavigationItem icon="file-earmark-code-fill" text="Code" />
    </div>
  )
}

export default Navigation
