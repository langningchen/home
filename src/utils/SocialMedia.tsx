import { Component, ReactNode } from "react"
import SocialMediaItem from "./SocialMediaItem"

export default class SocialMedia extends Component<{
  small?: boolean
}> {
  render(): ReactNode {
    const currentDate = new Date();
    return (
      <div className={"d-flex justify-content-center text-truncate " + (this.props.small ? "flex-row" : "flex-column")}>
        <SocialMediaItem small={this.props.small} icon="geo-alt" text="Shanghai, China" link="https://www.openstreetmap.org/relation/913067" />
        <SocialMediaItem small={this.props.small} icon="clock" text={`${currentDate.getUTCHours() + 8}:${currentDate.getUTCMinutes()}  (UTC +08:00)`} link="https://www.timeanddate.com/worldclock/china/shanghai" />
        <SocialMediaItem small={this.props.small} icon="github" text="langningchen" link="https://github.com/langningchen" />
        <SocialMediaItem small={this.props.small} icon="wechat" text="langningchen" />
        <SocialMediaItem small={this.props.small} icon="envelope" text="i@langningchen.com" link="mailto:i@langningchen.com" />
        <SocialMediaItem small={this.props.small} icon="twitter-x" text="@langningchen" link="https://x.com/langningchen" />
        <SocialMediaItem small={this.props.small} icon="linkedin" text="in/langningchen" link="https://www.linkedin.com/in/langningchen" />
        <SocialMediaItem small={this.props.small} icon="discord" link="https://discord.com/users/1134474039767875625" />
      </div>
    )
  }
}
