import { Routes, Route, Link } from "react-router-dom";
import './App.css';
//Components
import Profile from './components/main/pages/Profile/Profile';
import Header from './components/header/Header';
import PageHeader from "./components/main/components/PageHeader/PageHeader";
import { useState } from 'react';

function App() {
  let [page, setPage] = useState(false);

  return (
    <div className="App">
        <Header page={page} />
        <main className={page ? "show" : ""}>
        <PageHeader setPage={setPage}/>
          <Routes>
            <Route path="profile" element={<Profile setPage={setPage} />} />
            <Route path="/" element={<></>} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
