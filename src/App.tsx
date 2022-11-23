import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutme from "./pages/aboutme/Aboutme";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import SkillsPage from "./pages/skills/Index";
import NotificationBarParent from "./components/NotificationBarParent";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import CvPage from "./pages/cv";
import FakeChatBot from "./components/FakeChatBot/FakeChatBot";

function App() {
  const [myState, setMyState]: any = useState("");

  return (
    <BrowserRouter>
      <NotificationBarParent />
      <NavBar />
      {/* <Skills/> */}
      <FakeChatBot myState={myState} />

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

        <Route path="skills" element={<SkillsPage />} />
        <Route path="skill" element={<SkillsPage />} />
        <Route path="myskills" element={<SkillsPage />} />
        <Route path="myskill" element={<SkillsPage />} />

        <Route path="cv" element={<CvPage />} />

        {/* <Route path="*" element={<NoPage />} /> */}

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    // );
    // }
  );
}

export default App;
