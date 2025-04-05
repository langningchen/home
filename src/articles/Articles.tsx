import "./Articles.scss"
import { Card } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import IntroductionAboutMe from "./introduction-about-me/main"
import AboutLlama4 from "./about-llama4/main"

const articles = {
  "introduction-about-me": IntroductionAboutMe,
  "about-llama4": AboutLlama4,
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
                  <Card.Subtitle>
                    <div className="d-flex g-x-5 flex-wrap">
                      <span className="me-5">{ArticleComponent.date.toLocaleDateString()}</span>
                      <span className="text-primary">{new ArticleComponent({}).readTime()}</span>
                    </div>
                  </Card.Subtitle>
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
      <div className="mb-3 d-flex g-x-5 flex-wrap">
        <span className="me-5">{ArticleComponent.date.toLocaleDateString()}</span>
        <span className="text-primary">{new ArticleComponent({}).readTime()}</span>
      </div>
      <div className="mb-3 Introduction">{ArticleComponent.description}</div>
      <hr />
      <ArticleComponent />
      <div className="mt-3"><Link to="/articles">&laquo; Back to Articles</Link></div>
    </div >
  )
}
