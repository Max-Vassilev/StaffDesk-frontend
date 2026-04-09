import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Signin.css'

const Signin: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const form = new URLSearchParams()
    form.append('username', email)
    form.append('password', password)

    const res = await fetch('http://localhost:8000/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form,
    })

    if (!res.ok) {
      const data = await res.json()
      return alert(data.detail)
    }

    const data = await res.json()
    localStorage.setItem('token', data.access_token)
    window.location.href = '/home'
  }

  return (
    <div className="signin-wrapper">
      <Header />

      <section className="signin-page">
        <div className="signin-card">
          <h2>Sign In</h2>
          <p className="signin-subtitle">
            Welcome back. Please enter your credentials.
          </p>

          <div className="signin-form">
            <input
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button className="signin-button" onClick={handleLogin}>
              Sign In
            </button>
          </div>

          <div className="signin-divider">or</div>

          <button className="signin-google">Continue with Google</button>

          <p className="signin-bottom">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Signin