import "./TechStack.scss"
import { SimpleIcon } from "simple-icons"
import { Component, ReactNode } from "react"

export default class TechStack extends Component<{
    icon: SimpleIcon
    proficiency?: number
}> {
    render(): ReactNode {
        return (
            <div className={"d-inline-flex p-2 m-1 TechStack" + (this.props.proficiency !== undefined ? " Proficiency-" + this.props.proficiency : "")}
                role="button"
                style={{ backgroundColor: '#' + this.props.icon.hex }}
                onClick={() => window.open(this.props.icon.source)}
            >
                <div className="d-flex"
                    dangerouslySetInnerHTML={{ __html: this.props.icon.svg }}></div>
                <span className="ms-2 fw-bold fs-6">
                    {this.props.icon.title}
                </span>
            </div>
        )
    }
}
