import { Container } from "react-bootstrap"
import "./App.css"
import Home from "./Home"
import SocialMedia from "./SocialMedia"
import Navigation from "./Navigation"
import { Navigate, Route, Routes } from "react-router-dom"
import NotFound from "./NotFound"

function App() {
  return (
    <Container className="w-100 h-100 d-flex flex-column-reverse flex-sm-row flex-shrink-1">
      <Navigation />
      <main className="w-100 h-100 py-5">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <hr />
        <SocialMedia />
      </main>
    </Container>
  )
}

export default App
