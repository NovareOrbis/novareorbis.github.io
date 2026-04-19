import type { Tool } from '../data/tools'
import { ToolCard } from './ToolCard'
import './ToolGrid.css'

interface ToolGridProps {
  tools: Tool[]
  ranked?: boolean
}

export function ToolGrid({ tools, ranked = false }: ToolGridProps) {
  return (
    <div className="tool-grid">
      {tools.map((tool, index) => (
        <ToolCard key={tool.id} tool={tool} rank={ranked ? index + 1 : undefined} />
      ))}
    </div>
  )
}
