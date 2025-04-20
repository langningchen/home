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
                style={{ backgroundColor: '#' + this.props.icon.hex }}
            >
                <div className="d-flex"
                    dangerouslySetInnerHTML={{ __html: this.props.icon.svg }}></div>
                <span className="ms-2 fw-bold fs-6 d-none d-sm-block">
                    {this.props.icon.title}
                </span>
            </div>
        )
    }
}
