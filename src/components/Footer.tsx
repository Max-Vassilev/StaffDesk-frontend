import './Footer.css'

const Footer: React.FC = () => {
  return (
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
  )
}

export default Footer