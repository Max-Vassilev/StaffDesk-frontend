import Header from '../components/Header'
import Footer from '../components/Footer'
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
            <button className="cta-primary">Get Started</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="stat">
            <h2>Employee Timeline</h2>
            <p>Track join and leave dates in one clear view</p>
          </div>
          <div className="stat">
            <h2>Charts & Insights</h2>
            <p>Visualize data with clear analytics</p>
          </div>
          <div className="stat">
            <h2>Automated Notifications</h2>
            <p>Stay updated with smart alerts</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Calendar Overview</h2>
        <p className="text">Track employee join and leave dates in one place.</p>
        <img className="img" src="https://i.etsystatic.com/40346523/r/il/3d9320/4523213372/il_570xN.4523213372_ev2u.jpg" />
      </section>

      <section className="section">
        <h2>Visualize Growth</h2>
        <p className="text">Track company growth with clear charts over time.</p>
        <img className="img" src="https://cdn1.byjus.com/wp-content/uploads/2021/03/line-graph.png" />
      </section>

      <section className="section">
        <h2>Automated Notifications</h2>
        <p className="text">Receive alerts for important employee events and updates.</p>
        <img className="img" src="https://web-assets.esetstatic.com/tn/-x700/blog/images/6-notifications.jpeg" />
      </section>

      <section className="section">
        <h2>Pricing Plans</h2>

        <div className="pricing">
          <div className="card large">
            <h3>Monthly</h3>
            <div className="price-row">
              <div className="price">€ 9 <span>/month</span></div>
            </div>
            <ul>
              <li>Employee tracking</li>
              <li>Charts & analytics</li>
              <li>Calendar view</li>
              <li>Notifications</li>
            </ul>
            <button className="cta-primary full">Subscribe</button>
          </div>

          <div className="card large">
            <h3>Yearly</h3>
            <div className="price-row">
              <div className="price">€ 90 <span>/year</span></div>
              <span className="save">17% cheaper</span>
            </div>
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

      <Footer />
    </div>
  )
}

export default Landing