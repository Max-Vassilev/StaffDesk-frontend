import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Profile.css'

const Profile: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/signin')
      return
    }

    fetch('http://localhost:8000/home', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setEmail(data.email))
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <div className="profile-page">
      <Header />

      <div className="container">
        <div className="top">
          <h2>Account Settings</h2>

          <div className="block">
            <h4>Profile</h4>
            <div className="profile-row">
              <img src="https://cdn.vectorstock.com/i/500p/29/52/faceless-male-avatar-in-hoodie-vector-56412952.jpg" />
              <span>{email}</span>
            </div>
          </div>

          <div className="block">
            <h4>Email Preferences</h4>
            <p>Receive updates and notifications</p>
          </div>

          <div className="logout" onClick={handleLogout}>
            Log out
          </div>
        </div>

        <div className="danger">
          <h4>Danger Zone</h4>
          <p>Delete your account permanently</p>
          <button>Delete Account</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Profile