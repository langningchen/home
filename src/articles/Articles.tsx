import "./Articles.scss"
import { ReactNode, useCallback, useMemo, useState, useEffect } from "react"
import { Card, ListGroup, Badge, Container, Form, InputGroup, Button, Row, Col } from "react-bootstrap"
import { Link, useNavigate, useParams, useSearchParams } from "react-router"
import { useTranslation } from "react-i18next"
import {
  getArticleById,
  getAllArticles,
  getCategories,
  getTags,
  getFilteredArticles,
  ArticleFilters
} from "./articlesConfig"

export default function Articles(): ReactNode {
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const [searchParams, setSearchParams] = useSearchParams()
  const { t } = useTranslation()

  // Filter states
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '')
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get('tags')?.split(',').filter(Boolean) || []
  )
  const [showFeatured, setShowFeatured] = useState(
    searchParams.get('featured') === 'true'
  )

  // Get available categories and tags
  const categories = useMemo(() => getCategories(), [])
  const tags = useMemo(() => getTags(), [])

  // Update URL when filters change
  useEffect(() => {
    const newSearchParams = new URLSearchParams()
    if (searchTerm) newSearchParams.set('search', searchTerm)
    if (selectedCategory) newSearchParams.set('category', selectedCategory)
    if (selectedTags.length > 0) newSearchParams.set('tags', selectedTags.join(','))
    if (showFeatured) newSearchParams.set('featured', 'true')

    setSearchParams(newSearchParams, { replace: true })
  }, [searchTerm, selectedCategory, selectedTags, showFeatured, setSearchParams])

  const handleArticleClick = useCallback((articleId: string) => {
    navigate(`/articles/${articleId}`)
  }, [navigate])

  const handleTagClick = useCallback((tag: string, event?: React.MouseEvent | React.KeyboardEvent) => {
    event?.stopPropagation?.()
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }, [])

  const handleClearFilters = useCallback(() => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedTags([])
    setShowFeatured(false)
  }, [])

  // Get filtered articles
  const filteredArticles = useMemo(() => {
    const filters: ArticleFilters = {
      searchTerm: searchTerm || undefined,
      category: selectedCategory || undefined,
      tags: selectedTags.length > 0 ? selectedTags : undefined,
      featured: showFeatured || undefined
    }
    return getFilteredArticles(filters)
      .sort((a, b) => b.component.date.getTime() - a.component.date.getTime())
  }, [searchTerm, selectedCategory, selectedTags, showFeatured])

  const articleItems = useMemo(() =>
    filteredArticles.map((articleMeta) => {
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
                  <span className="visually-hidden">{t('articles.featured')}</span>
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
              <div className="d-flex flex-wrap gap-1" role="group" aria-label={t('articles.articleTags')}>
                {articleMeta.tags.map(tag => (
                  <Badge
                    key={tag}
                    bg={selectedTags.includes(tag) ? "primary" : "secondary"}
                    className="small tag-badge"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => handleTagClick(tag, e)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        e.stopPropagation()
                        handleTagClick(tag, e)
                      }
                    }}
                    aria-pressed={selectedTags.includes(tag)}
                    aria-label={`${tag} ${selectedTags.includes(tag) ? t('articles.selected') : t('articles.notSelected')}`}
                    title={`${selectedTags.includes(tag) ? t('articles.removeTagFilter') : t('articles.addTagFilter')}: ${tag}`}
                  >
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
    , [filteredArticles, handleArticleClick, selectedTags, handleTagClick, t])

  if (!params.id) {
    const hasActiveFilters = searchTerm || selectedCategory || selectedTags.length > 0 || showFeatured

    return (
      <Container className="articles-container py-3">
        <header className="mb-3 mb-sm-4">
          <h1 className="mb-2 fs-3 fs-sm-2 fs-md-1">
            <i className="bi bi-journal-text me-2 me-sm-3" aria-hidden="true"></i>
            {t('articles.title')}
          </h1>
          <p className="text-muted mb-0 fs-6 fs-sm-5">
            {t('articles.description')}
          </p>
        </header>

        {/* Search and Filter Controls */}
        <Card className="mb-3">
          <Card.Body className="p-3">
            <Row className="g-3">
              {/* Search */}
              <Col xs={12} md={6}>
                <Form.Label htmlFor="article-search" className="visually-hidden">
                  {t('articles.search')}
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    id="article-search"
                    type="text"
                    placeholder={t('articles.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-describedby="search-help"
                  />
                  <Button
                    variant="outline-secondary"
                    onClick={() => setSearchTerm('')}
                    disabled={!searchTerm}
                    aria-label={t('articles.clearSearch')}
                  >
                    <i className="bi bi-x" aria-hidden="true"></i>
                  </Button>
                </InputGroup>
                <div id="search-help" className="visually-hidden">
                  {t('articles.searchHelp')}
                </div>
              </Col>

              {/* Category Filter */}
              <Col xs={12} sm={6} md={3}>
                <Form.Label htmlFor="category-filter" className="visually-hidden">
                  {t('articles.category')}
                </Form.Label>
                <Form.Select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  aria-label={t('articles.categoryFilterLabel')}
                >
                  <option value="">{t('articles.allCategories')}</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </Form.Select>
              </Col>

              {/* Controls */}
              <Col xs={12} sm={6} md={3}>
                <div className="d-flex gap-2 h-100">
                  <Form.Check
                    type="checkbox"
                    id="featured-filter"
                    label={t('articles.featuredOnly')}
                    checked={showFeatured}
                    onChange={(e) => setShowFeatured(e.target.checked)}
                    className="align-self-center"
                  />
                  {hasActiveFilters && (
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      onClick={handleClearFilters}
                      className="ms-auto"
                      aria-label={t('articles.clearAllFilters')}
                    >
                      <i className="bi bi-x-circle me-1" aria-hidden="true"></i>
                      {t('articles.clearFilters')}
                    </Button>
                  )}
                </div>
              </Col>
            </Row>

            {/* Available Tags */}
            {tags.length > 0 && (
              <div className="mt-3 pt-3 border-top">
                <div className="small text-muted mb-2" id="tags-label">
                  {t('articles.availableTags')}
                  <span className="text-muted ms-1">({t('articles.clickToFilter')})</span>:
                </div>
                <div className="d-flex flex-wrap gap-1" role="group" aria-labelledby="tags-label">
                  {tags.map(tag => (
                    <Badge
                      key={tag}
                      bg={selectedTags.includes(tag) ? "primary" : "secondary"}
                      className="tag-badge"
                      role="button"
                      tabIndex={0}
                      onClick={() => handleTagClick(tag)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          handleTagClick(tag)
                        }
                      }}
                      aria-pressed={selectedTags.includes(tag)}
                      aria-label={`${tag} ${selectedTags.includes(tag) ? t('articles.selected') : t('articles.notSelected')}`}
                      title={`${selectedTags.includes(tag) ? t('articles.removeTagFilter') : t('articles.addTagFilter')}: ${tag}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </Card.Body>
        </Card>

        {/* Results */}
        <Card>
          <Card.Header className="p-2 p-sm-3">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h6 h-sm-5 mb-0" id="results-heading">
                <i className="bi bi-list me-1 me-sm-2" aria-hidden="true"></i>
                {hasActiveFilters ? t('articles.filteredResults') : t('articles.allArticles')}
                ({filteredArticles.length})
              </h2>
              {hasActiveFilters && (
                <small className="text-muted">
                  {t('articles.outOfTotal', { total: getAllArticles().length })}
                </small>
              )}
            </div>
          </Card.Header>
          <ListGroup variant="flush" role="list" aria-labelledby="results-heading">{filteredArticles.length === 0 ? (
            <ListGroup.Item className="p-3 text-center" role="listitem">
              <i className="bi bi-search text-muted me-2" style={{ fontSize: '1.5rem' }} aria-hidden="true"></i>
              <div className="text-muted">
                {hasActiveFilters
                  ? t('articles.noFilteredResults')
                  : t('articles.noArticles')
                }
              </div>
              {hasActiveFilters && (
                <Button
                  variant="link"
                  size="sm"
                  onClick={handleClearFilters}
                  className="p-0 mt-2"
                  aria-label={t('articles.clearAllFilters')}
                >
                  {t('articles.clearFilters')}
                </Button>
              )}
            </ListGroup.Item>
          ) : (
            articleItems
          )}
          </ListGroup>
        </Card>
      </Container>
    )
  }

  const articleMeta = getArticleById(params.id)
  if (!articleMeta) {
    return (
      <Container className="articles-container py-3">
        <Card>
          <Card.Body>
            <Card.Title>
              <i className="bi bi-exclamation-triangle me-2" aria-hidden="true"></i>
              {t('articles.notFound')}
            </Card.Title>
            <Card.Text>
              {t('articles.notFoundMessage')}
            </Card.Text>
            <Link to="/articles" className="btn btn-primary">
              <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
              {t('articles.backToArticles')}
            </Link>
          </Card.Body>
        </Card>
      </Container>
    )
  }

  const ArticleComponent = articleMeta.component

  return (
    <Container className="articles-container py-3">
      <div className="Article">
        <div className="mb-3">
          <Link to="/articles" className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
            {t('articles.backToArticles')}
          </Link>
        </div>
        <div className="d-flex align-items-center mb-3">
          <h1 className="mb-0 me-3">{ArticleComponent.title}</h1>
          {articleMeta.featured && (
            <Badge bg="warning" className="text-dark">
              <i className="bi bi-star-fill me-1" aria-hidden="true"></i>
              {t('articles.featured')}
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
            {t('articles.backToArticles')}
          </Link>
        </div>
      </div>
    </Container>
  )
}
