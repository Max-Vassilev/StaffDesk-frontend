import { useLayoutEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Signup.css'

const Signup: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="signup-wrapper">
      <Header />

      <section className="signup-page">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p className="subtitle">
            Sign up to manage your employees and track your team growth.
          </p>

          <div className="form">
            <input placeholder="your@email.com" />
            <input placeholder="Password" type="password" />
            <input placeholder="Confirm password" type="password" />

            <button className="cta-primary">Create Account</button>
          </div>

          <p className="bottom">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Signup