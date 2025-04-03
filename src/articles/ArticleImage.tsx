import { Image } from "react-bootstrap";

interface ImageProps {
    src: string;
}

function ArticleImage({ src }: ImageProps) {
    return (
        <div className="d-flex flex-column align-items-center w-100 py-5">
            <Image src={src} fluid className="col-12 col-sm-10 col-md-8 col-lg-6" />
        </div>
    );
}

export default ArticleImage;
