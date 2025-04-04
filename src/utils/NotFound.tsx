import { Component, ReactNode } from "react"

export default class NotFound extends Component {
  render(): ReactNode {
    return (
      <>
        <h1>Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </>
    )
  }
}
