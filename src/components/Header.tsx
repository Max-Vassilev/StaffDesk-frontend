import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'light' ? false : true
  })
  const navigate = useNavigate()

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light'
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <h2>StaffDesk</h2>
      </div>

      <div className="nav">
        <div className={`switch ${dark ? 'dark' : 'light'}`} onClick={() => setDark(!dark)}>
          <div className="track">
            <div className="thumb">
              <div className="icon" />
            </div>
          </div>
        </div>

        <button className="signin" onClick={() => navigate('/signin')}>
          Sign In
        </button>
      </div>
    </header>
  )
}

export default Header