import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div id="app">
      <NavTabs currentPage={currentPage} handlePageChange={setCurrentPage} />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
