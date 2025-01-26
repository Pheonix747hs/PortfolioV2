import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplacementSphere from "./Components/DisplacementSphere";
import ProjectPage from "./Pages/Project";
import HomePage from "./Pages/Home";
import { TimelineDemo } from "./Pages/About";
import { Navbar } from "./Components/Navbar";
import { Home, FileText, User, Mail } from "lucide-react";

const navItems = [
  { icon: <Home size={24} />, label: "Home", href: "/" },
  { icon: <FileText size={24} />, label: "Projects", href: "/projects" },
  { icon: <User size={24} />, label: "About", href: "/about" },
  { icon: <Mail size={24} />, label: "Contact", href: "/contact" },
];

function App() {
  return (
    <>
      <DisplacementSphere />
      <div
        style={{
          zIndex: 10,
          position: "absolute", // Ensures stacking context is respected
          top: "50%", // Adjust position
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the div
          fontSize: "24px",
          textAlign: "center",
          width: "100vw", // Set a width for the scrollable container
          height: "100vh", // Set a height for the scrollable container
        }}
      >
        <Navbar items={navItems} />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/about" element={<TimelineDemo />} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
