import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

// components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {

  const [activeTab, setActiveTab ] = useState("home")  

  useEffect(()=> {
  console.log(activeTab);
  }, [activeTab])

  return (
    <div>      
      <BrowserRouter>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>      
      </BrowserRouter>  
      <Footer />    
    </div>
  );
}

export default App;
