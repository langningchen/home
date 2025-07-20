import { Component } from "react";
import { renderToString } from "react-dom/server";
import readTimeEstimate from "read-time-estimate";
import i18n from "../utils/i18n";

abstract class AbstractArticle extends Component {
    public static title: string;
    public static date: Date;
    public static description: string;
}

export default class Article extends AbstractArticle {
    public readTime() {
        const content = renderToString(this.render());
        const readTime = readTimeEstimate(content);
        const wordsAndImages = i18n.language.startsWith('zh')
            ? `${readTime.totalWords + readTime.otherLanguageTimeCharacters} 字，${readTime.totalImages} 张图片`
            : `${readTime.totalWords + readTime.otherLanguageTimeCharacters} words and ${readTime.totalImages} images`;
        const readTimeLabel = i18n.t('articles.readTime', 'Read time');

        return (
            <span title={wordsAndImages}>
                {readTimeLabel}: {readTime.humanizedDuration}
            </span>
        );
    }
}
