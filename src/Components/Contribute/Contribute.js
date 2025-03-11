import React from "react";
import "./Contribute.css";

const Contribute = () => {
  return (
    <div className="contribute-container">
      {/* Left Side: Header + Text */}
      <div className="contribute-text">
        <h1 className="contribute-header">CONTRIBUTE</h1>
        <p>
          Your support is vital to our mission of making every American wealthy
          again. By contributing to MAWA, you are investing in a future where
          economic freedom and individual prosperity are accessible to all.
        </p>
        <p>
          Together, we can advocate for policies and initiatives that pave the
          way for financial success across the nation.
        </p>
      </div>

      {/* Right Side: Bitcoin Image */}
      <div className="contribute-image">
        {/* Update the src path to where your bitcoin image is located */}
        <img src="./bitcoin.png" alt="Bitcoin" />
      </div>
    </div>
  );
};

export default Contribute;
