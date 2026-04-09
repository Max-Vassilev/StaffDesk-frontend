import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'light' ? false : true
  })
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light'
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    setIsAuth(!!localStorage.getItem('token'))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
    window.location.href = '/'
  }

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate(isAuth ? '/home' : '/')}>
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

        {isAuth ? (
          <button className="signin" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="signin" onClick={() => navigate('/signin')}>
            Sign In
          </button>
        )}
      </div>
    </header>
  )
}

export default Header