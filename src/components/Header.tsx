import { useState, useEffect } from 'react'
import './Header.css'

const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(true)

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light'
  }, [dark])

  return (
    <header className="header">
      <div className="logo">
        <h2>StaffDesk</h2>
      </div>

      <div className="nav">
        <button className="link">Articles</button>

        <div className={`switch ${dark ? 'dark' : 'light'}`} onClick={() => setDark(!dark)}>
          <div className="track">
            <div className="thumb">
              <div className="icon" />
            </div>
          </div>
        </div>

        <button className="signup">Sign Up</button>
      </div>
    </header>
  )
}

export default Header