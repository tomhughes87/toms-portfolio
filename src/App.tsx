import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from './pages/aboutme/Aboutme';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ />}> */}
            <Route index element={<Contact />} />
            
            <Route path="Projects" element={<Projects />} />
            <Route path="Project" element={<Projects />} />
            <Route path="myProjects" element={<Projects />} />
            <Route path="myProject" element={<Projects />} />

            <Route path="about" element={<Aboutme />} />
            <Route path="aboutme" element={<Aboutme />} />
            
            <Route path="contact" element={<Contact />} />
            <Route path="contacts" element={<Contact />} />
            <Route path="contactme" element={<Contact />} />

            <Route path="skills" element={<Skills />} />
            <Route path="skill" element={<Skills />} />
            <Route path="myskills" element={<Skills />} />
            <Route path="myskill" element={<Skills />} />



            {/* <Route path="*" element={<NoPage />} /> */}

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    // );
  // }
  );
}


export default App;
