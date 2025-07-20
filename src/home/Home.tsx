import "./Home.scss"
import { Component, ReactNode } from "react"
import { Image } from "react-bootstrap"
import TechStackContainer from "./TechStackContainer"
import { ReactTyped } from "react-typed"
import { Fade } from "react-awesome-reveal"
import Padding from "../utils/Padding"
import SocialMedia from "../utils/SocialMedia"
import EducationContainer from "./EducationContainer"
import StatusCards from "./StatusCards"
import { withTranslation, WithTranslation } from "react-i18next"

class Home extends Component<WithTranslation> {
  render(): ReactNode {
    const t = this.props.t;
    return (
      <>
        <div className="d-block d-md-none pb-3" style={{ maxWidth: "15rem" }}>
          <Image src="/avatar.jpg" rounded className="w-100" />
        </div>
        <div className="d-flex justify-content-between gap-5 pb-3">
          <div className="flex-grow-1">
            <div className="fs-4">{t('greeting')}</div>
            <div className="fs-1 name">Langning Chen</div>
            <ReactTyped className="fs-2"
              strings={[
                t('role.option1'),
                t('role.option2'),
                t('role.option3'),
                t('role.option4'),
                t('role.option5'),
              ]}
              typeSpeed={30} backSpeed={20} backDelay={2000}
              loop
            />
            <div className="fs-2" style={{ visibility: "hidden", position: "relative", height: 0 }}>{t('role.option4')}|</div>
          </div>
          <div className="d-none d-md-block" style={{ maxWidth: "15rem" }}>
            <Image src="/avatar.jpg" rounded className="w-100" />
          </div>
        </div>
        <div className="d-flex gap-5 align-items-center text-truncate flex-md-shrink-0 flex-shrink-1 pb-3">
          <SocialMedia />
        </div>
        <Fade triggerOnce>
          <StatusCards />
          <Padding />
          <TechStackContainer />
          <Padding />
          <EducationContainer />
        </Fade>
      </>
    )
  }
}

export default withTranslation(undefined, { keyPrefix: 'home' })(Home);
