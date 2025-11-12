import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Signup from "./components/SignUp/SignUp";
import Login from "./components/Signin/login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<h1>Courses</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/enroll" element={<h1>Enroll Now</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
