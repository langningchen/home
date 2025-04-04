import { Component, ReactNode } from "react"
import SocialMediaItem from "./SocialMediaItem"

export default class SocialMedia extends Component<{
  small?: boolean
}> {
  render(): ReactNode {
    return (
      <div className={"d-flex justify-content-center text-truncate " + (this.props.small ? "flex-row" : "flex-column")}>
        <SocialMediaItem small={this.props.small} icon="github" link="https://github.com/langningchen" />
        <SocialMediaItem small={this.props.small} icon="wechat" text="langningchen" />
        <SocialMediaItem small={this.props.small} icon="envelope" text="i@langningchen.com" link="mailto:i@langningchen.com" />
        <SocialMediaItem small={this.props.small} icon="twitter-x" link="https://x.com/langningchen" />
        <SocialMediaItem small={this.props.small} icon="linkedin" link="https://www.linkedin.com/in/langningchen" />
        <SocialMediaItem small={this.props.small} icon="discord" link="https://discord.com/users/1134474039767875625" />
      </div>
    )
  }
}
