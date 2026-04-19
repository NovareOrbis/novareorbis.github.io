import type { ReactNode } from 'react'
import './Section.css'

interface SectionProps {
  icon?: ReactNode
  title: string
  subtitle?: string
  rightLink?: { href: string; label: string }
  rightAction?: ReactNode
  children: ReactNode
}

export function Section({ icon, title, subtitle, rightLink, rightAction, children }: SectionProps) {
  return (
    <div className="section">
      <div className="section-header">
        <div>
          <h3 className="section-title">
            {icon && <span className="section-icon">{icon}</span>}
            {title}
          </h3>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {rightLink && (
          <a href={rightLink.href} className="section-link">
            {rightLink.label}
          </a>
        )}
        {rightAction}
      </div>
      <div className="section-content">{children}</div>
    </div>
  )
}
