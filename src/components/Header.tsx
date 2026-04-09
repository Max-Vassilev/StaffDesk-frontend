import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'light' ? false : true
  })
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [email, setEmail] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.className = dark ? 'dark' : 'light'
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuth(!!token)

    if (token) {
      fetch('http://localhost:8000/home', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => setEmail(data.email))
    }
  }, [])

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
          <div className="user" onClick={() => navigate('/profile')}>
            <img src="https://cdn.vectorstock.com/i/500p/29/52/faceless-male-avatar-in-hoodie-vector-56412952.jpg" />
            <span>{email}</span>
          </div>
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