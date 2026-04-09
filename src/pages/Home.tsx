import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Home.css'

const Home: React.FC = () => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    fetch('http://localhost:8000/home', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => res.json())
      .then(setUser)
  }, [])

  return (
    <div>
      <Header />

      <div className="home-container">
        <div className="home-card">
          <h1>Welcome to your home page</h1>
          <p className="subtitle">You are successfully authenticated</p>
          {user ? (
            <p className="email">Logged in as: {user.email}</p>
          ) : (
            <span className="loading">Loading...</span>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home