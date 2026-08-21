import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'

function App() {

  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>} />
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
