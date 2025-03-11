import React, { useState } from "react";
import "./Home.css";
import Contribute from "../Contribute/Contribute";
import Newsroom from "../Newsroom/Newsroom";
import Contact from "../Contact/Contact"; // <-- import the new component
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  // "about" is the default active tab
  const [activeTab, setActiveTab] = useState("about");
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabClick = (tab, e) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className={`home-container ${activeTab !== "about" ? "other-bg" : ""}`}>
      {/* Navbar */}
      <nav className="home-nav">
        <ul className="home-menu">
          <li>
            <a
              href="#"
              onClick={(e) => handleTabClick("about", e)}
              className={activeTab === "about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => handleTabClick("contribute", e)}
              className={activeTab === "contribute" ? "active" : ""}
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => handleTabClick("newsroom", e)}
              className={activeTab === "newsroom" ? "active" : ""}
            >
              Newsroom
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => handleTabClick("contact", e)}
              className={activeTab === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Search Bar */}
        <div className="home-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <i className="fa fa-search search-icon"></i>
        </div>
      </nav>

      {/* Content Section */}
      {activeTab === "about" ? (
        <div className="hero-content">
          <img src="/mawa.png" alt="MAWA" className="hero-image" />
          <h1>
            MAKE AMERICA <span className="hero-highlight">WEALTHY AGAIN</span>
          </h1>
          <p>Supporting policies that drive economic prosperity.</p>
          <button>LEARN MORE</button>
        </div>
      ) : activeTab === "contribute" ? (
        <Contribute />
      ) : activeTab === "newsroom" ? (
        <Newsroom />
      ) : activeTab === "contact" ? (
        <Contact />
      ) : (
        <div className="other-content">
          <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <p>
            This is the {activeTab} page. All content is rendered below the fixed
            navbar on a black background.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
