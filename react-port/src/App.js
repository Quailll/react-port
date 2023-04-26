import Header from "./components/header";
import "./App.css";
import Navbar from "./components/nav";
import Aboutme from "./components/aboutme";
import Footer from "./components/footer";
// import Projects from './components/project'
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Contact from "./components/contact";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About Me") {
      return <Aboutme />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact Me") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div id="body">
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <Projects></Projects> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
