import { Image } from "react-bootstrap"
import TechStackContainer from "./TechStackContainer"
import "./Home.scss"
import { ReactTyped } from "react-typed"
import { Fade } from "react-awesome-reveal"
import Padding from "./Padding"
import SocialMedia from "./SocialMedia"
import EducationContainer from "./EducationContainer"

function Home() {
  return (
    <>
      <div className="d-block d-md-none w-100 pb-3" style={{ maxWidth: "15rem" }}>
        <Image src="/avatar.png" rounded className="w-100" />
      </div>
      <div className="d-flex gap-5 flex-wrap">
        <div className="flex-grow-1">
          <div className="fs-4">Hello! I am</div>
          <div className="fs-1 name">Langning Chen</div>
          <ReactTyped className="fs-2"
            strings={[
              "a high school student",
              "a software engineer",
              "a web developer",
              "an open-source contributor",
              "an OIer",
            ]}
            typeSpeed={30} backSpeed={20} backDelay={2000}
            loop
          />
          <div className="fs-2" style={{ visibility: "hidden", position: "relative", height: 0 }}>an open-source contributor|</div>
        </div>
        <div className="d-flex gap-5 align-items-center text-truncate">
          <div className="d-none d-md-block w-100" style={{ maxWidth: "15rem" }}>
            <Image src="/avatar.png" rounded className="w-100" />
          </div>
          <div className="text-truncate flex-md-shrink-0 flex-shrink-1">
            <SocialMedia />
          </div>
        </div>
      </div >
      <Fade>
        <Padding />
        <TechStackContainer />
        <Padding />
        <EducationContainer />
      </Fade>
    </>
  )
}

export default Home
