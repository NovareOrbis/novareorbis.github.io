import '../App.css'
import { ToolLayout } from '../layouts/ToolLayout'
import { pages } from '../data/pageDefinitions'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <ToolLayout>
      <div className="content-space">
        <p>{pages.home.description}</p>
        <div className="tool-grid">
          {Object.values(pages).map((page) => {
            if (page.path === "/") return null; // ホームページは除外
            return (
              <ToolCard
                path={page.path}
                title={page.title}
                description={page.description}
              />
            );
          })}
        </div>
      </div>
    </ToolLayout>
  )
}

type Props = {
  path: string;
  title: string;
  description: string;
}

export function ToolCard({ path, title, description }: Props) {
  return (
    <div className="tool-card-wrapper">
      <Link className="tool-card" to={path}>
        <div className="tool-card-inner">
          <div>
            <div className="tool-card-header">
              <h4 className="tool-name">{title}</h4>
            </div>
            <p className="tool-description">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
