import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Signin.css'

const Signin: React.FC = () => {
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
            <input placeholder="your@email.com" />
            <input placeholder="Password" type="password" />

            <button className="signin-button">Sign In</button>
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