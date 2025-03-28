import { SimpleIcon } from "simple-icons"
import "./TechStack.scss"

interface TechStackProps {
    icon: SimpleIcon;
    proficiency?: number;
}

function TechStack({ icon, proficiency }: TechStackProps) {
    return (
        <div className={"d-inline-flex p-2 m-1 TechStack" + (proficiency !== undefined ? " Proficiency-" + proficiency : "")}
            role="button"
            style={{ backgroundColor: '#' + icon.hex }}
            onClick={() => window.open(icon.source)}
        >
            <div className="d-flex"
                dangerouslySetInnerHTML={{ __html: icon.svg }}></div>
            <span className="ms-2 fw-bold fs-6">
                {icon.title}
            </span>
        </div>
    )
}

export default TechStack
