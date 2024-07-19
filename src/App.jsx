import { useState } from "react";
import { Outlet } from 'react-router-dom';
import './App.css';
import NavTabs from "./components/NavTabs";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={setCurrentPage} />
      <main className="mx-3">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
