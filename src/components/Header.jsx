import NavTabs from "../components/UI/NavTabs";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="px-3 py-2 header-custom-background text-white d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <h1 className="nameDisplay px-2">BWaterbury</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}