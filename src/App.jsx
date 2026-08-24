import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs.jsx'
import Work from './Pages/Work.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/who-we-are' element={<AboutUs/>}/>
        <Route path='/services/work-visa' element={<Work/>}/>
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
