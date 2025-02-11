import QRCode from "react-qr-code";
import "./SocialMediaItem.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface SocialMediaProps {
    icon: string;
    link?: string;
    qrCode?: string;
    text?: string;
}

function SocialMediaItem({ icon, link, qrCode, text }: SocialMediaProps) {
    if (link)
        return (
            <i className={`SocialMediaItem bi bi-${icon} mx-2`}
                role="button"
                onClick={() => window.open(link)}
            ></i>
        );
    else if (qrCode || text) {
        return (
            <OverlayTrigger overlay={<Tooltip id={`tooltip-${icon}`}>
                {qrCode && <QRCode value={qrCode} size={128} />}
                {text && <div className="text-center">{text}</div>}
            </Tooltip >}>
                <i className={`SocialMediaItem bi bi-${icon} mx-2`}
                    role="button"
                ></i>
            </OverlayTrigger>
        );
    }
    else
        return (
            <i className={`SocialMediaItem bi bi-${icon} mx-2`}></i>
        );
}

export default SocialMediaItem;
