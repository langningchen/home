import "./Articles.scss"
import { Card } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import IntroductionAboutMe from "./introduction-about-me/main"

const articles = {
  "introduction-about-me": IntroductionAboutMe,
};

function Articles() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>()
  if (!id) {
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
  const ArticleComponent = articles[id as keyof typeof articles]
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
      <ArticleComponent />
      <div className="mt-3"><Link to="/articles">&laquo; Back to Articles</Link></div>
    </div>
  )
}

export default Articles
