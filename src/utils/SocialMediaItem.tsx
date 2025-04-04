import "./SocialMediaItem.scss";

interface SocialMediaItemProps {
    icon: string;
    text?: string;
    link?: string;
    small?: boolean;
}

function SocialMediaItem({ icon, text, link, small }: SocialMediaItemProps) {
    if (small) {
        return (
            <a href={link}>
                <i className={`SocialMediaItem bi bi-${icon} mx-2`}></i>
            </a>
        );
    }
    return (
        <div className="d-flex">
            <i className={`SocialMediaItem bi bi-${icon} me-3`}></i>
            {
                link ? <a href={link} className="flex-shrink-1 text-truncate">{text ?? link}</a> :
                    <span className="text-truncate">{text}</span>
            }
        </div>
    );
}

export default SocialMediaItem;
