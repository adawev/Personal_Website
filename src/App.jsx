import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AdminAddProject from './components/AdminAddProject'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="app">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      } />
      <Route path="/admin" element={<AdminAddProject />} />
    </Routes>
  )
}

export default App
