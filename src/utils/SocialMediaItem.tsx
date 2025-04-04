import "./SocialMediaItem.scss"
import { Component, ReactNode } from "react"

export default class SocialMediaItem extends Component<{
    icon: string
    text?: string
    link?: string
    small?: boolean
}> {
    render(): ReactNode {
        if (this.props.small) {
            return (
                <a href={this.props.link}>
                    <i className={`SocialMediaItem bi bi-${this.props.icon} mx-2`}></i>
                </a>
            )
        }
        return (
            <div className="d-flex">
                <i className={`SocialMediaItem bi bi-${this.props.icon} me-3`}></i>
                {
                    this.props.link ? <a href={this.props.link} className="flex-shrink-1 text-truncate">{this.props.text ?? this.props.link}</a> :
                        <span className="text-truncate">{this.props.text}</span>
                }
            </div>
        )
    }
}
