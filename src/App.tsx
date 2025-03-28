import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import Home from "./Home"
import Blogs from "./Blogs"
import SocialMedia from "./SocialMedia"
import Navigation from "./Navigation"
import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from "./NotFound"
import Projects from "./Projects"

function App() {
  return (
    <div className="w-100 h-100 d-flex flex-column-reverse flex-sm-row flex-shrink-1">
      <Navigation />
      <main className="w-100 h-100 p-5">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <hr />
        <SocialMedia small />
      </main>
    </div>
  )
}

export default App
