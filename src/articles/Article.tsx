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
        const wordsAndImages = i18n.t('articles.wordsAndImages', {
            words: readTime.totalWords + readTime.otherLanguageTimeCharacters,
            images: readTime.totalImages
        });
        const readTimeLabel = i18n.t('articles.readTime');

        // 自定义国际化时长格式化
        const formatDuration = (minutes: number) => {
            if (minutes < 1) {
                return i18n.t('articles.lessThanMinute');
            }

            if (minutes < 60) {
                return i18n.t('articles.readingTimeMinutes', { minutes: Math.ceil(minutes) });
            }

            const hours = Math.floor(minutes / 60);
            const remainingMinutes = Math.round(minutes % 60);

            if (remainingMinutes === 0) {
                return i18n.t('articles.readingTimeHours', { hours });
            }

            // 如果有小时和分钟，组合显示
            const hoursPart = hours === 1
                ? i18n.t('articles.readingTimeHour', { hours })
                : i18n.t('articles.readingTimeHours', { hours });
            const minutesPart = remainingMinutes === 1
                ? i18n.t('articles.readingTimeMinute', { minutes: remainingMinutes })
                : i18n.t('articles.readingTimeMinutes', { minutes: remainingMinutes });

            return `${hoursPart} ${minutesPart}`;
        };

        return (
            <span title={wordsAndImages}>
                {readTimeLabel}: {formatDuration(readTime.duration)}
            </span>
        );
    }
}
