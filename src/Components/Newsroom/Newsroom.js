import React from "react";
import "./Newsroom.css";

const Newsroom = () => {
  return (
    <div className="other-content newsroom-content">
      <h1>Newsroom</h1>
      <div className="newsroom-cards">

        {/* PR Newswire Card */}
        <a
          href="https://www.prnewswire.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="newsroom-card prnewswire"
        >
          <div className="newsroom-card-top">
            <h2>PR Newswire</h2>
          </div>
          <div className="newsroom-card-bottom">
            <p>
              Make America Wealthy Again (MAWA) Appeals to President Trump to
              Support Roger Ver Amid Potential Extradition
            </p>
          </div>
        </a>

        {/* Yahoo! News Card */}
        <a
          href="https://finance.yahoo.com/?guccounter=1"
          target="_blank"
          rel="noopener noreferrer"
          className="newsroom-card yahoo"
        >
          <div className="newsroom-card-top">
            <h2>Yahoo! News</h2>
          </div>
          <div className="newsroom-card-bottom">
            <p>
              MAWA Applauds President Trump's Pardon of Silk Road Founder Ross
              William Ulbricht
            </p>
          </div>
        </a>

        {/* Fortune Card */}
        <a
          href="https://fortune.com/2025/02/13/trump-admin-cryptocurrency-blockchain-technology/"
          target="_blank"
          rel="noopener noreferrer"
          className="newsroom-card fortune"
        >
          <div className="newsroom-card-top">
            <h2>Fortune</h2>
          </div>
          <div className="newsroom-card-bottom">
            <p>
              What is the Trump admin's stance on cryptocurrency and blockchain
              technology?
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Newsroom;
