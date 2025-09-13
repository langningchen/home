import "./Projects.scss"
import { ReactNode, useState, useEffect } from "react"
import { Badge, Button, Card, Container, ListGroup, Placeholder } from 'react-bootstrap'
import { useTranslation } from "react-i18next"

// Featured projects data structure (you can modify this)
const featuredProjects = [
  {
    id: "hydro-helper",
    title: "Hydro Helper",
    description: "An unofficial Visual Studio Code extension for Hydro Online Judge platform that streamlines competitive programming workflow.",
    image: null, // You can add image URLs here
    technologies: ["TypeScript", "VS Code API", "Node.js"],
    status: "Active",
    links: {
      github: "https://github.com/langningchen/hydro-helper",
      website: "https://marketplace.visualstudio.com/items?itemName=langningchen.hydro-helper"
    }
  },
  {
    id: "xmoj-script",
    title: "XMOJ Script",
    description: "A user script and backend system that enhances the usability of XMOJ online judge platform for competitive programming.",
    image: null,
    technologies: ["JavaScript", "Node.js", "PHP", "Cloudflare Workers"],
    status: "Maintained by Team",
    links: {
      github: "https://github.com/XMOJ-Script-dev/XMOJ-Script",
      website: "https://xmoj-bbs.me/"
    }
  }
]

// GitHub repository interface
interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
  private: boolean
}

export default function Projects(): ReactNode {
  const { t } = useTranslation()
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/langningchen/repos?sort=updated&per_page=50')

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data: GitHubRepo[] = await response.json()

        // Filter out private repos and sort by stars and recent activity
        const publicRepos = data
          .filter(repo => !repo.private)
          .sort((a, b) => {
            // Sort by stars first, then by update date
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          })

        setRepos(publicRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getLanguageColor = (language: string | null): string => {
    const colors: Record<string, string> = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      Java: "#b07219",
      "C++": "#f34b7d",
      C: "#555555",
      HTML: "#e34c26",
      CSS: "#563d7c",
      PHP: "#4F5D95",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#fa7343",
    }
    return colors[language || ""] || "#586069"
  }

  return (
    <Container className="projects-container py-3">
      <header className="mb-4">
        <h1 className="mb-2 fs-3 fs-sm-2 fs-md-1">
          <i className="bi bi-code-square me-2 me-sm-3" aria-hidden="true"></i>
          {t('projects.title')}
        </h1>
        <p className="text-muted mb-0 fs-6 fs-sm-5">
          {t('projects.description')}
        </p>
      </header>

      {/* Featured Projects Section */}
      <section className="mb-5">
        <h2 className="h4 mb-3">
          <i className="bi bi-star-fill me-2 text-warning" aria-hidden="true"></i>
          {t('projects.featured')}
        </h2>
        <div className="row g-3 g-lg-4">
          {featuredProjects.map((project) => (
            <div key={project.id} className="col-12 col-lg-6">
              <Card className="h-100 featured-project-card">
                {project.image && (
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                )}
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="h5">{project.title}</Card.Title>
                    <Badge
                      bg={project.status === 'Active' ? 'success' : 'info'}
                      className="ms-2 flex-shrink-0"
                    >
                      {project.status === 'Active'
                        ? t('projects.active')
                        : project.status === 'Maintained by Team'
                          ? t('projects.maintainedByTeam')
                          : t('projects.archived')
                      }
                    </Badge>
                  </div>
                  <Card.Text className="flex-grow-1 mb-3">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    <div className="d-flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} bg="secondary" className="small">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex gap-2 mt-auto">
                    {project.links.github && (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-github me-2" aria-hidden="true"></i>
                        {t('projects.github')}
                      </Button>
                    )}
                    {project.links.website && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-globe me-2" aria-hidden="true"></i>
                        {t('projects.visit')}
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Repositories Section */}
      <section>
        <h2 className="h4 mb-3">
          <i className="bi bi-github me-2" aria-hidden="true"></i>
          {t('projects.allRepos')}
          {!loading && repos.length > 0 && ` (${repos.length})`}
        </h2>

        <Card>
          <Card.Header className="p-2 p-sm-3">
            <h3 className="h6 h-sm-5 mb-0">
              <i className="bi bi-list me-1 me-sm-2" aria-hidden="true"></i>
              {t('projects.repositoryList')}
            </h3>
          </Card.Header>
          <ListGroup variant="flush">
            {loading ? (
              // Loading placeholders
              Array.from({ length: 6 }).map((_, index) => (
                <ListGroup.Item key={index} className="p-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1">
                      <Placeholder as="div" animation="glow">
                        <Placeholder xs={6} className="mb-2" />
                      </Placeholder>
                      <Placeholder as="div" animation="glow">
                        <Placeholder xs={8} size="sm" className="mb-2" />
                      </Placeholder>
                      <Placeholder as="div" animation="glow">
                        <Placeholder xs={4} size="xs" />
                      </Placeholder>
                    </div>
                    <div className="flex-shrink-0 ms-3">
                      <Placeholder.Button xs={2} size="sm" />
                    </div>
                  </div>
                </ListGroup.Item>
              ))
            ) : error ? (
              <ListGroup.Item className="p-3 text-center">
                <i className="bi bi-exclamation-triangle text-warning me-2" aria-hidden="true"></i>
                {t('projects.errorLoadingRepos')}: {error}
              </ListGroup.Item>
            ) : repos.length === 0 ? (
              <ListGroup.Item className="p-3 text-center">
                <i className="bi bi-info-circle text-info me-2" aria-hidden="true"></i>
                {t('projects.noReposFound')}
              </ListGroup.Item>
            ) : (
              repos.map((repo) => (
                <ListGroup.Item
                  key={repo.id}
                  as="a"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none p-3 repo-item"
                  aria-label={`Repository: ${repo.name}`}
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1 me-3">
                      <div className="fw-semibold mb-1">
                        {repo.name}
                        {repo.stargazers_count > 0 && (
                          <Badge bg="warning" text="dark" className="ms-2 small">
                            <i className="bi bi-star-fill me-1" aria-hidden="true"></i>
                            {repo.stargazers_count}
                          </Badge>
                        )}
                      </div>
                      {repo.description && (
                        <p className="text-muted small mb-2">
                          {repo.description}
                        </p>
                      )}
                      <div className="d-flex align-items-center flex-wrap gap-2 small text-muted">
                        {repo.language && (
                          <span className="d-flex align-items-center">
                            <span
                              className="rounded-circle me-1"
                              style={{
                                width: '12px',
                                height: '12px',
                                backgroundColor: getLanguageColor(repo.language)
                              }}
                            ></span>
                            {repo.language}
                          </span>
                        )}
                        <span>
                          <i className="bi bi-clock me-1" aria-hidden="true"></i>
                          {new Date(repo.updated_at).toLocaleDateString()}
                        </span>
                        {repo.forks_count > 0 && (
                          <span>
                            <i className="bi bi-git me-1" aria-hidden="true"></i>
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                      {repo.topics.length > 0 && (
                        <div className="mt-2 d-flex flex-wrap gap-1">
                          {repo.topics.slice(0, 5).map((topic) => (
                            <Badge key={topic} bg="light" text="dark" className="small">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <i className="bi bi-box-arrow-up-right text-muted" aria-hidden="true"></i>
                    </div>
                  </div>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Card>
      </section>
    </Container>
  )
}
