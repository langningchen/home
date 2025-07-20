import "./Articles.scss"
import { ReactNode, useCallback, useMemo } from "react"
import { Card, ListGroup, Row, Col, Badge } from "react-bootstrap"
import { Link, useNavigate, useParams } from "react-router"
import { useTranslation } from "react-i18next"
import { getArticleById, getAllArticles } from "./articlesConfig"

export default function Articles(): ReactNode {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const { t } = useTranslation()

  const handleArticleClick = useCallback((articleId: string) => {
    navigate(`/articles/${articleId}`)
  }, [navigate])

  const articleItems = useMemo(() =>
    getAllArticles()
      .sort((a, b) => b.component.date.getTime() - a.component.date.getTime()) // Sort by date, newest first
      .map((articleMeta) => {
        const { id, component: ArticleComponent } = articleMeta
        const readTime = new ArticleComponent({}).readTime()

        return (
          <ListGroup.Item
            key={id}
            as="button"
            action
            onClick={() => handleArticleClick(id)}
            className="d-flex justify-content-between align-items-start text-start article-item p-3"
            aria-label={`Article: ${ArticleComponent.title}`}
          >
            <div className="flex-grow-1 me-3">
              <div className="d-flex align-items-center mb-2">
                <div className="fw-semibold fs-5 me-2">{ArticleComponent.title}</div>
                {articleMeta.featured && (
                  <Badge bg="warning" className="text-dark">
                    <i className="bi bi-star-fill" aria-hidden="true"></i>
                    <span className="visually-hidden">Featured</span>
                  </Badge>
                )}
              </div>
              <div className="text-muted small mb-2">
                <i className="bi bi-calendar me-2" aria-hidden="true"></i>
                {ArticleComponent.date.toLocaleDateString()}
                <span className="mx-2">•</span>
                <i className="bi bi-clock me-2" aria-hidden="true"></i>
                {readTime}
                {articleMeta.category && (
                  <>
                    <span className="mx-2">•</span>
                    <i className="bi bi-folder me-2" aria-hidden="true"></i>
                    {articleMeta.category}
                  </>
                )}
              </div>
              <p className="text-muted mb-2 small">
                {ArticleComponent.description}
              </p>
              {articleMeta.tags && articleMeta.tags.length > 0 && (
                <div className="d-flex flex-wrap gap-1">
                  {articleMeta.tags.map(tag => (
                    <Badge key={tag} bg="secondary" className="small">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            <div className="flex-shrink-0">
              <Badge bg="primary" className="rounded-pill">
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Badge>
            </div>
          </ListGroup.Item>
        )
      })
    , [handleArticleClick])

  if (!params.id) {
    return (
      <div className="articles-container px-1 px-sm-2 px-md-3">
        <header className="mb-3 mb-sm-4">
          <h1 className="mb-2 fs-3 fs-sm-2 fs-md-1">
            <i className="bi bi-journal-text me-2 me-sm-3" aria-hidden="true"></i>
            {t('articles.title', 'Articles')}
          </h1>
          <p className="text-muted mb-0 fs-6 fs-sm-5">
            {t('articles.description', 'Read my thoughts, experiences, and technical insights')}
          </p>
        </header>

        <Row className="g-2 g-sm-3 g-lg-4">
          <Col xs={12} lg={8}>
            <Card>
              <Card.Header className="p-2 p-sm-3">
                <h2 className="h6 h-sm-5 mb-0">
                  <i className="bi bi-list me-1 me-sm-2" aria-hidden="true"></i>
                  {t('articles.allArticles', 'All Articles')} ({getAllArticles().length})
                </h2>
              </Card.Header>
              <ListGroup variant="flush">
                {articleItems}
              </ListGroup>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            <Card className="bg-body-secondary h-100">
              <Card.Body className="p-2 p-sm-3">
                <h3 className="h6 card-title">
                  <i className="bi bi-info-circle me-1 me-sm-2" aria-hidden="true"></i>
                  {t('articles.about', 'About Articles')}
                </h3>
                <p className="card-text small mb-0">
                  {t('articles.aboutDescription', 'Here you can find my latest articles about programming, technology, and personal experiences.')}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }

  const articleMeta = getArticleById(params.id)
  if (!articleMeta) {
    return (
      <div className="articles-container px-1 px-sm-2 px-md-3">
        <Card>
          <Card.Body>
            <Card.Title>
              <i className="bi bi-exclamation-triangle me-2" aria-hidden="true"></i>
              Article Not Found
            </Card.Title>
            <Card.Text>
              The article you are looking for does not exist.
            </Card.Text>
            <Link to="/articles" className="btn btn-primary">
              <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
              Back to Articles
            </Link>
          </Card.Body>
        </Card>
      </div>
    )
  }

  const ArticleComponent = articleMeta.component

  return (
    <div className="articles-container px-1 px-sm-2 px-md-3">
      <div className="Article">
        <div className="mb-3">
          <Link to="/articles" className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
            Back to Articles
          </Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h1 className="mb-0 me-3">{ArticleComponent.title}</h1>
          {articleMeta.featured && (
            <Badge bg="warning" className="text-dark">
              <i className="bi bi-star-fill me-1" aria-hidden="true"></i>
              Featured
            </Badge>
          )}
        </div>
        <div className="mb-3 d-flex flex-wrap text-muted small">
          <span className="me-4">
            <i className="bi bi-calendar me-2" aria-hidden="true"></i>
            {ArticleComponent.date.toLocaleDateString()}
          </span>
          <span className="me-4 text-primary">
            <i className="bi bi-clock me-2" aria-hidden="true"></i>
            {new ArticleComponent({}).readTime()}
          </span>
          {articleMeta.category && (
            <span className="me-4">
              <i className="bi bi-folder me-2" aria-hidden="true"></i>
              {articleMeta.category}
            </span>
          )}
        </div>
        {articleMeta.tags && articleMeta.tags.length > 0 && (
          <div className="mb-3 d-flex flex-wrap gap-1">
            {articleMeta.tags.map(tag => (
              <Badge key={tag} bg="secondary" className="small">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="mb-4 p-3 bg-body-secondary rounded">
          <p className="mb-0 small">{ArticleComponent.description}</p>
        </div>
        <hr />
        <ArticleComponent />
        <div className="mt-4 pt-3 border-top">
          <Link to="/articles" className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
            Back to Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
