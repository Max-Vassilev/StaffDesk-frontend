import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Contact from './pages/Contact'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App