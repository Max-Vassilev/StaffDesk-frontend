import Header from '../components/Header'
import './Landing.css'

const Landing = () => {
  return (
    <div>
      <Header />

      <section className="hero">
        <div className="hero-left">
          <span className="badge">EMPLOYEE MANAGEMENT PLATFORM</span>
          <h1>Track Employees with Precision</h1>
          <p>
            Monitor workforce growth, manage timelines, and automate key events with clarity.
          </p>
          <div className="hero-actions">
            <button className="cta-primary">Get Started →</button>
            <button className="cta-secondary">Learn More →</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="stat">
            <h2>100+</h2>
            <p>Employees tracked</p>
          </div>
          <div className="stat">
            <h2>12</h2>
            <p>Charts & insights</p>
          </div>
          <div className="stat">
            <h2>24/7</h2>
            <p>Automated notifications</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Visualize Growth</h2>
        <p className="text">Track company growth with clear charts over time.</p>
        <img className="img" src="https://cdn1.byjus.com/wp-content/uploads/2021/03/line-graph.png" />
      </section>

      <section className="section">
        <h2>Calendar Overview</h2>
        <p className="text">Keep track of employee timelines and milestones.</p>
        <img className="img" src="https://i.etsystatic.com/40346523/r/il/3d9320/4523213372/il_570xN.4523213372_ev2u.jpg" />
      </section>

      <section className="section">
        <h2>Pricing</h2>

        <div className="pricing">
          <div className="card large">
            <h3>Monthly</h3>
            <div className="price">$9 <span>/month</span></div>
            <ul>
              <li>Employee tracking</li>
              <li>Charts & analytics</li>
              <li>Calendar view</li>
              <li>Notifications</li>
            </ul>
            <button className="cta-primary full">Get Started</button>
          </div>

          <div className="card large">
            <h3>Yearly</h3>
            <div className="price">$90 <span>/year</span></div>
            <p className="save">17% cheaper</p>
            <ul>
              <li>Employee tracking</li>
              <li>Charts & analytics</li>
              <li>Calendar view</li>
              <li>Notifications</li>
            </ul>
            <button className="cta-primary full">Subscribe</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            © 2026 StaffDesk
          </div>

          <div className="footer-right">
            <a>Terms of Service</a>
            <a>Privacy Policy</a>
            <a>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing