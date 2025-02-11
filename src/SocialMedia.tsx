import SocialMediaItem from "./SocialMediaItem"

function SocialMedia() {
  return (
    <div className="d-flex justify-content-center">
      Contact me: &nbsp;
      <SocialMediaItem icon="github" link="https://github.com/langningchen" />
      <SocialMediaItem icon="wechat" qrCode="https://u.wechat.com/EMFa5zXuWLzzZ-YRf5GTX1c" text="Scan to add" />
      <SocialMediaItem icon="envelope" link="mailto:i@langningchen.com" />
      <SocialMediaItem icon="twitter-x" link="https://x.com/langningchen" />
      <SocialMediaItem icon="linkedin" link="https://www.linkedin.com/in/langning-chen-b0418a348/" />
    </div>
  )
}

export default SocialMedia
