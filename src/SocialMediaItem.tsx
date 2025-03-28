import "./SocialMediaItem.scss";

interface SocialMediaItemProps {
    icon: string;
    text?: string;
    link?: string;
    small?: boolean;
}

function SocialMediaItem({ icon, text, link, small }: SocialMediaItemProps) {
    return (
        <a href={link} className="d-flex">
            <i className={`SocialMediaItem bi bi-${icon}` + (small ? " mx-2" : " me-3")}></i>
            {!small && <span className="flex-shrink-1 text-truncate">{text ?? link}</span>}
        </a>
    );
}

export default SocialMediaItem;
