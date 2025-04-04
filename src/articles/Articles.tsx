import "./Articles.scss"
import { Card } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import IntroductionAboutMe from "./introduction-about-me/main"
// import { renderToStaticMarkup, renderToString } from "react-dom/server"
// import { ReactNode } from "react"

const articles = {
  "introduction-about-me": IntroductionAboutMe,
}

export default function Articles() {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  if (!params.id) {
    return (
      <>
        {
          Object.keys(articles).map((articleId) => {
            const ArticleComponent = articles[articleId as keyof typeof articles]
            return (
              <Card key={articleId} onClick={() => {
                navigate(`/articles/${articleId}`)
              }} role="button" className="mb-3">
                <Card.Body>
                  <Card.Title>{ArticleComponent.title}</Card.Title>
                  <Card.Subtitle>{ArticleComponent.date.toLocaleDateString()}</Card.Subtitle>
                  <br />
                  <Card.Text>{ArticleComponent.description}</Card.Text>
                </Card.Body>
              </Card>
            )
          })
        }
      </>
    )
  }
  const ArticleComponent = articles[params.id as keyof typeof articles]
  if (!ArticleComponent) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Article Not Found</Card.Title>
          <Card.Text>
            The article you are looking for does not exist.
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  return (
    <div className="Article">
      <div className="mb-3"><Link to="/articles">&laquo; Back to Articles</Link></div>
      <h1>{ArticleComponent.title}</h1>
      <div className="mb-3">{ArticleComponent.date.toLocaleDateString()}</div>
      <div className="mb-3 Introduction">{ArticleComponent.description}</div>
      {/* {(() => {
        let str = renderToStaticMarkup(<ArticleComponent />);
        let reg = RegExp("</?[a-z-]+( [A-Za-z-]+(=\".*?\")?)*>");
        while (reg.test(str)) {
          str = str.replace(reg, "")
        };
        return str;
      })()} */}
      <ArticleComponent />
      <div className="mt-3"><Link to="/articles">&laquo; Back to Articles</Link></div>
    </div >
  )
}
