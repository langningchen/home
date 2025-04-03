import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import Home from "./home/Home"
import Articles from "./articles/Articles"
import SocialMedia from "./SocialMedia"
import Navigation from "./Navigation"
import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from "./NotFound"
import Projects from "./projects/Projects"
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className="w-100 h-100 d-flex flex-column-reverse flex-sm-row flex-shrink-1">
      <Navigation />
      <main className="w-100 h-100 p-5">
        <Container>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<Articles />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <hr className="mt-5" />
        <SocialMedia small />
      </main>
    </div>
  )
}

export default App
