import React from "react";
const navArray = [ "About Me", "Portfolio", "Contact Me", "Resume"];

function Navbar({currentPage, handlePageChange}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navArray.map(function (navLink) {
              return (
                <li className="nav-item" key={navLink}>
                  <button id='btn'
                    aria-current="page"
                    onClick={() => handlePageChange(navLink)}
                    className={
                      currentPage === navLink ? "nav-link active" : "nav-link"
                    }
                  >
                    {navLink} |
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
