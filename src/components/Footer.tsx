import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer: React.FC = () => {
  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          © 2026 StaffDesk
        </div>

        <div className="footer-right">
          <a>Terms of Service</a>
          <a>Privacy Policy</a>
          <a onClick={() => navigate('/contact')}>Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer