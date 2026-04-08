import Header from '../components/Header'
import Footer from '../components/Footer'
import './Landing.css'
import { useNavigate } from 'react-router-dom'

const Landing: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Header />

      <section className="hero">
        <div className="hero-left">
          <span className="badge">RECRUITMENT PIPELINE TRACKER</span>
          <h1>Track Hiring Processes Clearly</h1>
          <p>
            Manage candidates, custom interview stages, and decisions in one simple board.
          </p>
        </div>

        <div className="hero-right">
          <div className="stat">
            <h2>Position Boards</h2>
            <p>Create roles per office and track candidates easily</p>
          </div>
          <div className="stat">
            <h2>Custom Interview Stages</h2>
            <p>Define custom steps like HR, tech, task, and final interview</p>
          </div>
          <div className="stat">
            <h2>Candidate Scoring</h2>
            <p>Set ratings and notes. Mark pass or fail per stage.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Position Boards</h2>
        <p className="text">
          Manage multiple roles like Junior DevOps, Frontend Developer, and Marketing positions in one place.
        </p>
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPh66nfyrBhjCA_V15YxfzHWfUh_1TerwOhQ&s"
        />
      </section>

      <section className="section">
        <h2>Custom Interview Stages</h2>
        <p className="text">
          Define custom steps like HR call, technical interview, assignments, and cultural fit.
        </p>
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPh66nfyrBhjCA_V15YxfzHWfUh_1TerwOhQ&s"
        />
      </section>

      <section className="section">
        <h2>Candidate Funnel</h2>
        <p className="text">
          Track candidates from initial screening to final hire with full visibility.
        </p>
        <img
          className="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPh66nfyrBhjCA_V15YxfzHWfUh_1TerwOhQ&s"
        />
      </section>

      <section className="section">
        <h2>Start Tracking Your Hiring</h2>
        <p className="text">
          Organize positions, define custom interview stages, and evaluate candidates in one place.
        </p>
        <button className="cta-secondary" onClick={() => navigate('/signup')}>
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  )
}

export default Landing