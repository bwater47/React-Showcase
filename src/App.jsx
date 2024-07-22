import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div id="app">
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}