import { useEffect, useState } from 'react'
import '../App.css'

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.93 7.07-1.41-1.41M6.34 6.34 4.93 4.93" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  )
}

type Theme = 'light' | 'dark'

export const ToolLayout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  const handleShare = async () => {
    const title = 'Tools - 無料で使える便利ツールリンク集'
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
      } catch (err) {
        console.error('Share failed', err)
      }
    } else {
      window.open(
        `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        '_blank'
      )
    }
  }

  return (
    <div className="app">
      {/* ヘッダー */}
      <div className="header-wrapper">
        <header className="header">
          <div className="header-left">
            <a className="logo-group" href={import.meta.env.BASE_URL}>
              <div className="logo-link">
                <img
                  alt="Tool Links"
                  src={`${import.meta.env.BASE_URL}links_icon.png`}
                  className="logo-img"
                  width={48}
                  height={48}
                />
              </div>
              <div className="logo-text">
                <div className="logo-name">
                  <div>Text Flow</div>
                </div>
              </div>
            </a>
          </div>

          <div className="header-right">
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label="テーマを切り替える"
              id="theme-toggle"
            >
              {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="icon-btn"
              onClick={handleShare}
              aria-label="シェアする"
            >
              <ShareIcon />
            </button>
          </div>
        </header>
      </div>

      {/* メインコンテンツ */}
      <main className="main">
        <div className="container">
          <div className="content-space">
            {children}
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">© 2026 Text Flow.</p>
        </div>
      </footer>
    </div>
  )
}
