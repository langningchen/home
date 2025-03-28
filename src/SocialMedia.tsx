import SocialMediaItem from "./SocialMediaItem"

interface SocialMediaProps {
  small?: boolean;
}

function SocialMedia({ small }: SocialMediaProps) {
  return (
    <div className={"d-flex justify-content-center " + (small ? "flex-row" : "flex-column")}>
      <SocialMediaItem small={small} icon="github" link="https://github.com/langningchen" />
      <SocialMediaItem small={small} icon="wechat" text="langningchen" />
      <SocialMediaItem small={small} icon="envelope" text="i@langningchen.com" link="mailto:i@langningchen.com" />
      <SocialMediaItem small={small} icon="twitter-x" link="https://x.com/langningchen" />
      <SocialMediaItem small={small} icon="linkedin" link="https://www.linkedin.com/in/langningchen" />
      <SocialMediaItem small={small} icon="discord" link="https://discord.com/users/1134474039767875625" />
    </div>
  )
}

export default SocialMedia;
