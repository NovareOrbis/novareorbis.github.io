import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { Section } from './components/Section'
import { ToolGrid } from './components/ToolGrid'
import { categories } from './data/tools'

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  )
}

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

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5h16M4 12h16M4 19h16" />
    </svg>
  )
}

function XIcon() {
  return (
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
      <path d="M18 6 6 18m-12 0L18 6" />
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

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  // const [bannerVisible, setBannerVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

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

  const allTools = useMemo(() => categories.flatMap((c) => c.tools), [])

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    return allTools.filter(
      (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
    )
  }, [searchQuery, allTools])

  return (
    <div className="app">
      {/*
      アナウンスバナー
      {bannerVisible && (
        <div className="announce-banner">
          <div className="announce-inner">
            <div className="announce-left">
              <RocketIcon />
              <p className="announce-text">
                <span className="announce-bold">toolpodsへの開発依頼は</span>
                <a href="/develop" className="announce-link">
                  こちら
                </a>
              </p>
            </div>
            <button
              className="icon-btn icon-btn-sm"
              onClick={() => setBannerVisible(false)}
              aria-label="閉じる"
            >
              <XIcon />
            </button>
          </div>
        </div>
      )}
      */}

      {/* ヘッダー */}
      <div className="header-wrapper">
        <header className="header">
          <div className="header-left">
            <div className="logo-group">
              <a className="logo-link" href={import.meta.env.BASE_URL}>
                <img
                  alt="Tool Links"
                  src={`${import.meta.env.BASE_URL}links_icon.png`}
                  className="logo-img"
                  width={48}
                  height={48}
                />
              </a>
              <div className="logo-text">
                <div className="logo-name">
                  <a href={import.meta.env.BASE_URL}>Tool Links</a>
                </div>
                <div className="logo-by">
                  <a href={import.meta.env.BASE_URL} className="logo-by-link">
                    by Novare Orbis
                  </a>
                </div>
              </div>
            </div>
            <p className="header-tagline">無料で使える便利ツールまとめ</p>
          </div>

          {/* デスクトップ右側 */}
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

          {/* モバイルメニューボタン */}
          <div className="header-mobile">
            <button
              className="icon-btn icon-btn-border"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="メニュー"
            >
              <MenuIcon />
            </button>
          </div>
        </header>
      </div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className="icon-btn" onClick={toggleTheme} aria-label="テーマを切り替える">
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            <span style={{ marginLeft: 8 }}>{theme === 'light' ? 'ライトモード' : 'ダークモード'}</span>
          </button>
          <button className="icon-btn" onClick={handleShare} aria-label="シェアする">
            <ShareIcon />
            <span style={{ marginLeft: 8 }}>シェアする</span>
          </button>
        </div>
      )}

      {/* メインコンテンツ */}
      <main className="main">
        <div className="container">
          <div className="content-space">
            {/* 検索 */}
            <div className="search-wrapper">
              <div className="search-container">
                <div className="search-icon">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="ツールを検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="search-input"
                />
                {searchQuery && (
                  <button
                    className="search-clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="クリア"
                  >
                    <XIcon />
                  </button>
                )}
              </div>
            </div>

            {/* 検索結果 */}
            {searchQuery.trim() && (
              <Section
                title={`検索結果: "${searchQuery}"`}
                subtitle={`${searchResults.length}件のツールが見つかりました`}
              >
                {searchResults.length > 0 ? (
                  <ToolGrid tools={searchResults} />
                ) : (
                  <p className="no-results">該当するツールが見つかりませんでした。</p>
                )}
              </Section>
            )}

            {!searchQuery.trim() && (
              <>

                {/* カテゴリ別 */}
                {categories.filter(c => c.tools.length > 0).map((category) => (
                  <Section
                    key={category.id}
                    title={category.name}
                    subtitle={category.description}
                  >
                    <ToolGrid tools={category.tools} />
                  </Section>
                ))}
              </>
            )}
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">© 2026 Tool Links. 無料で使える便利ツールリンク集。</p>
        </div>
      </footer>
    </div>
  )
}

export default App
