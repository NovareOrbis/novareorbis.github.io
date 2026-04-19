import type { Tool } from '../data/tools'
import './ToolCard.css'

interface ToolCardProps {
  tool: Tool
  rank?: number
}

export function ToolCard({ tool, rank }: ToolCardProps) {
  return (
    <div className="tool-card-wrapper">
      {rank !== undefined && (
        <div className={`rank-badge rank-${rank}`}>
          <span>{rank}</span>
        </div>
      )}
      <a className="tool-card" href={tool.href} target="_blank" rel="noopener noreferrer">
        {tool.isNew && (
          <div className="badge-container">
            <div className="new-badge">
              <span className="new-badge-blur" />
              <span className="new-badge-text">NEW</span>
            </div>
          </div>
        )}
        {tool.isUpdated && (
          <div className="badge-container">
            <span className="update-badge">UPDATE</span>
          </div>
        )}
        <div className="tool-card-inner">
          <div>
            <div className="tool-card-header">
              <div className="tool-emoji">
                {tool.emoji.startsWith('http') || tool.emoji.startsWith('/') ? (
                  <img src={tool.emoji} alt="" className="tool-emoji-img" />
                ) : (
                  tool.emoji
                )}
              </div>
              <h4 className="tool-name">{tool.name}</h4>
            </div>
            {tool.updateNote ? (
              <div className="update-note">
                <p className="update-request">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                  </svg>
                  <span>{tool.updateNote.request}</span>
                </p>
                <p className="update-change">→ {tool.updateNote.change}</p>
              </div>
            ) : (
              <p className="tool-description">{tool.description}</p>
            )}
          </div>

        </div>
      </a>
    </div>
  )
}
