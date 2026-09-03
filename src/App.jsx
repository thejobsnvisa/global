import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs.jsx'
import Work from './Pages/Work.jsx'
import Migration from './Pages/Migration.jsx'
import Dependent from './Pages/Dependent.jsx'
import Visitor from './Pages/Visitor.jsx'
import Student from './Pages/Student.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/who-we-are' element={<AboutUs/>}/>
        <Route path='/services/work-visa' element={<Work/>}/>
        <Route path='/services/migration-visa' element={<Migration/>}/>
        <Route path='/services/dependent-visa' element={<Dependent/>}/>
        <Route path='/services/visitor-visa' element={<Visitor/>}/>
        <Route path='/services/student-visa' element={<Student/>}/>
      </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App
