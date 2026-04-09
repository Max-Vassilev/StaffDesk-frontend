import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Landing from './pages/Landing'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Profile from './pages/Profile'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))

  useEffect(() => {
    const handleStorage = () => {
      setIsAuth(!!localStorage.getItem('token'))
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to="/home" /> : <Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={isAuth ? <Navigate to="/home" /> : <Signup />} />
        <Route path="/signin" element={isAuth ? <Navigate to="/home" /> : <Signin />} />
        <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/signin" />} />
      </Routes>
    </>
  )
}

export default App