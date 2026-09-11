import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Work from "./Pages/Work.jsx";
import Migration from "./Pages/Migration.jsx";
import Dependent from "./Pages/Dependent.jsx";
import Visitor from "./Pages/Visitor.jsx";
import Student from "./Pages/Student.jsx";
import Videos from "./Pages/Videos.jsx";
import English from "./Pages/English.jsx";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<AboutUs />} />

        <Route path="/services/work-visa" element={<Work />} />
        <Route path="/services/migration-visa" element={<Migration />} />
        <Route path="/services/dependent-visa" element={<Dependent />} />
        <Route path="/services/visitor-visa" element={<Visitor />} />
        <Route path="/services/student-visa" element={<Student />} />

        <Route path="/latest-update/videos" element={<Videos />} />

        <Route path="/english-test" element={<English />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;