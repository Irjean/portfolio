import { Routes, Route, useNavigate, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion";
import './App.css';
//Components
import Profile from './components/main/pages/Profile/Profile';
import Header from './components/header/Header';
import PageHeader from "./components/main/components/PageHeader/PageHeader";
import Comment from "./components/main/pages/Comment/Comment";
import Contact from "./components/main/pages/Contact/Contact";
import Skill from "./components/main/pages/Skill/Skill";
import Experience from "./components/main/pages/Experience/Experience";
import Project from "./components/main/pages/Project/Project";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const width = useWindowSize();
  let [page, setPage] = useState(false);
  let [pageTitle, setPageTitle] = useState('');
  let [lightMode, setLightMode] = useState(false);
  let [isDesktop, setDesktop] = useState(window.innerWidth > 790);


  function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(undefined);
    
    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth)
        if(window.innerWidth > 780 && !isDesktop){
          navigate("/profile");
          setDesktop(true);
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowWidth;
  }

  useEffect(() => {
    if(window.innerWidth > 780 && window.location.href === window.location.origin + "/"){
      navigate("/profile");
    }
  }, [])

  return (
    <div className="App">
        <Header page={page} lightMode={lightMode} setLightMode={setLightMode} />
        <main className={page ? "show" : ""}>
          <AnimatePresence mode='wait' initial={true}>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<>
            <PageHeader setPage={setPage} pageTitle={pageTitle} />
            <Outlet />
            </>}>

              <Route path="profile" element={<Profile  setPage={setPage} setPageTitle={setPageTitle} />} />
              <Route path="skill" element={<Skill setPage={setPage} setPageTitle={setPageTitle} lightMode={lightMode} />} />
              <Route path="experience" element={<Experience setPage={setPage} setPageTitle={setPageTitle} />} />
              <Route path="project" element={<Project setPage={setPage} setPageTitle={setPageTitle} lightMode={lightMode} />} />
              <Route path="contact" element={<Contact setPage={setPage} setPageTitle={setPageTitle} lightMode={lightMode} />} />
              <Route path="comment" element={<Comment setPage={setPage} setPageTitle={setPageTitle} lightMode={lightMode} />} />
            </Route>
          </Routes>
          </AnimatePresence>
        </main>
    </div>
  );
}

export default App;
