import { Component, ReactNode } from "react"
import { Fade } from "react-awesome-reveal"
import { Image } from "react-bootstrap"

export default class StatusCards extends Component {
    render(): ReactNode {
        return (
            <div className="d-flex gap-2 flex-wrap">
                <Fade cascade={true} duration={500} direction="right" triggerOnce>
                    <Image fluid src="https://github-readme-stats.vercel.app/api?username=langningchen&theme=transparent&show_icons=true&show=reviews,discussions_started,prs_merged,prs_merged_percentage&rank_icon=percentile" />
                    <Image fluid src="https://github-readme-stats.vercel.app/api/top-langs/?username=langningchen&theme=transparent&langs_count=10&layout=compact" />
                    <Image fluid src="https://github-readme-stats.vercel.app/api/wakatime?username=langningchen&theme=transparent&langs_count=10&layout=compact" />
                </Fade>
            </div>
        )
    }
}
