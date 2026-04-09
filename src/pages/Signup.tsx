import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Signup.css'

const Signup: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleSignup = async () => {
    if (password !== confirm) return alert('Passwords mismatch')

    const res = await fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) return alert(data.detail)

    localStorage.setItem('token', data.access_token)

    window.location.href = '/home'
  }

  return (
    <div className="signup-wrapper">
      <Header />

      <section className="signup-page">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p className="signup-subtitle">
            Create your account to get started.
          </p>

          <div className="signup-form">
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
            <input
              placeholder="Confirm Password"
              type="password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
            />

            <button className="signup-button" onClick={handleSignup}>
              Create Account
            </button>
          </div>

          <div className="signup-divider">or</div>

          <button className="signup-google">Continue with Google</button>

          <p className="signup-bottom">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Signup