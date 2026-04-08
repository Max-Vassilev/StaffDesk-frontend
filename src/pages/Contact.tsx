import Header from '../components/Header'
import Footer from '../components/Footer'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <div>
      <Header />

      <section className="contact">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <p className="subtitle">
            Send us a message and we’ll get back to you within 24 hours.
          </p>

          <div className="form">
            <input placeholder="Your name" />
            <input placeholder="your@email.com" />
            <input placeholder="Subject" />
            <textarea placeholder="Tell us how we can help..." rows={5} />
            <button className="cta-contact">Send Message</button>
          </div>

          <p className="bottom">
            Or email us at <a href="mailto:support@staffdesk.com">support@staffdesk.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact