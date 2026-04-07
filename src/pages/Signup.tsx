import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Signup.css'

const Signup: React.FC = () => {
  return (
    <div className="signup-wrapper">
      <Header />

      <section className="signup-page">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p className="signup-subtitle">
            Sign up to manage your employees and track your team growth.
          </p>

          <div className="signup-form">
            <input placeholder="your@email.com" />
            <input placeholder="Password" type="password" />
            <input placeholder="Confirm password" type="password" />

            <button className="signup-button">Create Account</button>
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