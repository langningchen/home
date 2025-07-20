import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { ReactNode, Suspense, lazy, memo } from "react"
import SocialMedia from "./utils/SocialMedia"
import Navigation from "./utils/Navigation"
import { Navigate, Route, Routes } from "react-router"
import { Container, Spinner } from "react-bootstrap"
import useUrlLang from "./utils/useUrlLang"
import LanguageWrapper from "./utils/LanguageWrapper"

// Lazy load components for better performance
const Home = lazy(() => import("./home/Home"))
const Articles = lazy(() => import("./articles/Articles"))
const Settings = lazy(() => import("./settings/Settings"))
const Projects = lazy(() => import("./projects/Projects"))
const NotFound = lazy(() => import("./utils/NotFound"))

// Loading component
const LoadingSpinner = memo(() => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
    <Spinner animation="border" role="status" aria-label="Loading">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
));

function App(): ReactNode {
  const { lang, prefix, isValidPath } = useUrlLang();

  if (!isValidPath) { return <LoadingSpinner />; }

  return (
    <div className="app-container w-100 h-100 d-flex flex-column-reverse flex-sm-row">
      <Navigation />
      <main
        className="main-content w-100 h-100 p-2 p-sm-3 p-md-4 p-lg-5"
        id="main-content"
        role="main"
        aria-label="Main content"
      >
        <Container fluid className="h-100 d-flex flex-column px-1 px-sm-3">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route element={<LanguageWrapper lng={lang} />}>
                <Route path={`${prefix}/home`} element={<Home />} />
                <Route path={`${prefix}/articles`} element={<Articles />} />
                <Route path={`${prefix}/articles/:id`} element={<Articles />} />
                <Route path={`${prefix}/projects`} element={<Projects />} />
                <Route path={`${prefix}/settings`} element={<Settings />} />
                <Route path={`${prefix}/`} element={<Navigate to={`${prefix}/home`} replace />} />
                <Route path="/" element={<Navigate to={`${prefix}/home`} replace />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>

          <footer className="mt-auto pt-3 pt-sm-4 pt-md-5" role="contentinfo" aria-label="Footer">
            <hr className="mb-3 mb-sm-4" />
            <SocialMedia small />
          </footer>
        </Container>
      </main>
    </div>
  )
}

export default memo(App);
