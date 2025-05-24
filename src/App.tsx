import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { ReactNode } from "react"
import Home from "./home/Home"
import Articles from "./articles/Articles"
import SocialMedia from "./utils/SocialMedia"
import Navigation from "./utils/Navigation"
import { Navigate, Route, Routes } from "react-router"
import NotFound from "./utils/NotFound"
import Projects from "./projects/Projects"
import { Container } from "react-bootstrap"
import useUrlLang from "./utils/useUrlLang"
import LanguageWrapper from "./utils/LanguageWrapper"

export default function App(): ReactNode {
  const { lang, prefix } = useUrlLang();
  return (
    <div className="w-100 h-100 d-flex flex-column-reverse flex-sm-row flex-shrink-1" >
      <Navigation />
      <main className="w-100 h-100 py-5">
        <Container>
          <Routes>
            <Route element={<LanguageWrapper lng={lang} />}>
              <Route path={`${prefix}/`} element={
                <Navigate to={`${lang}/home`} replace />
              } />
              <Route path={`${prefix}/home`} element={<Home />} />
              <Route path={`${prefix}/articles`} element={<Articles />} />
              <Route path={`${prefix}/articles/:id`} element={<Articles />} />
              <Route path={`${prefix}/projects`} element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Container>
        <hr className="mt-5" />
        <SocialMedia small />
      </main>
    </div>
  )
}
