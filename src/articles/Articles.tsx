import { Alert, Card } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router-dom"
import IntroductionAboutMe from "./introduction-about-me"

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
                  <Card.Subtitle>{ArticleComponent.date}</Card.Subtitle>
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
    <>
      <Link to="/articles"> &laquo; Back to Articles</Link>
      <h3>{ArticleComponent.title}</h3>
      <h6 className="mb-3">{ArticleComponent.date}</h6>
      <Alert className="mb-5" variant="secondary">{ArticleComponent.description}</Alert>
      <ArticleComponent />
      <Link to="/articles"> &laquo; Back to Articles</Link>
    </>
  )
}

export default Articles
