import { Component } from "react";
import { renderToString } from "react-dom/server";
import readTimeEstimate from "read-time-estimate";

abstract class AbstractArticle extends Component {
    public static title: string;
    public static date: Date;
    public static description: string;
}

export default class Article extends AbstractArticle {
    public readTime(): JSX.Element {
        const content = renderToString(this.render());
        const readTime = readTimeEstimate(content);
        return (
            <span title={`${readTime.totalWords + readTime.otherLanguageTimeCharacters} words and ${readTime.totalImages} images`}>
                Read time: {readTime.humanizedDuration}
            </span>
        );
    }
}
