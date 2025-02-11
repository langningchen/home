import { Image } from "react-bootstrap"
import TechStackContainer from "./TechStackContainer"
import "./Home.css"

function Home() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div>
          <h2>
            Hello, I'm <span className="name">Langning Chen</span>.
          </h2>
        </div>
        <div>
          <Image src="/avatar.png" rounded width="200rem" />
        </div>
      </div>
      <TechStackContainer />
    </>
  )
}

export default Home
