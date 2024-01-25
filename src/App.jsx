import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
//Components
import Profile from './components/main/pages/Profile/Profile';
import Header from './components/header/Header';
import PageHeader from "./components/main/components/PageHeader/PageHeader";
import { useEffect, useState } from 'react';
import Comment from "./components/main/pages/Comment/Comment";
import Contact from "./components/main/pages/Contact/Contact";
import Skill from "./components/main/pages/Skill/Skill";
import Experience from "./components/main/pages/Experience/Experience";
import Project from "./components/main/pages/Project/Project";

function App() {
  const navigate = useNavigate();
  let [page, setPage] = useState(false);
  let [pageTitle, setPageTitle] = useState('');
  let [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if(window.innerWidth > 780){
      navigate("/profile");
    }
  }, [])

  return (
    <div className="App">
        <Header page={page} lightMode={lightMode} setLightMode={setLightMode} />
        <main className={page ? "show" : ""}>
        <PageHeader setPage={setPage} pageTitle={pageTitle}/>
          <Routes>
            <Route path="profile" element={<Profile  setPage={setPage} setPageTitle={setPageTitle} />} />
            <Route path="skill" element={<Skill setPage={setPage} setPageTitle={setPageTitle} lightMode={lightMode} />} />
            <Route path="experience" element={<Experience setPage={setPage} setPageTitle={setPageTitle} />} />
            <Route path="project" element={<Project setPage={setPage} setPageTitle={setPageTitle} lightMode={lightMode} />} />
            <Route path="contact" element={<Contact setPage={setPage} setPageTitle={setPageTitle} lightMode={lightMode} />} />
            <Route path="comment" element={<Comment setPage={setPage} setPageTitle={setPageTitle} lightMode={lightMode} />} />
            <Route path="/" element={<></>} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
