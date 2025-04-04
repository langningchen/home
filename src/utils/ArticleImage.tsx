import { Component, ReactNode } from "react"
import { Image } from "react-bootstrap"

export default class ArticleImage extends Component<{
    src: string
}> {
    render(): ReactNode {
        return (
            <div className="d-flex flex-column align-items-center w-100 py-5">
                <Image src={this.props.src} fluid className="col-12 col-sm-10 col-md-8 col-lg-6" />
            </div>
        )
    }
}
