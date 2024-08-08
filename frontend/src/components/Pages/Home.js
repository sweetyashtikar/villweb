import React from "react";
import "../style/Home.css"; // Ensure this path is correct

const Home = () => {
  return (
    <div className="welcome">
      <div className="header">
        <p>Gold Valley, Sanaswadi, Maharashtra 402120</p>
      </div>
      <div className="content">
        <h1>WELCOME to SWARU VILLA</h1>
        <p className="subtitle">
          "ESCAPE the city hustle
          <br />
          EXPLORE Swaru Villa in Tamhini ghat
          <br />
          in the heart of the Nature."
        </p>
      </div>
      <div className="sub-div">
        <h1>
          Tamhini Ghat, Gold Valley, Sanaswadi,
          <br />
          Maharashtra 402120
        </h1>
      </div>
    </div>
  );
};

export default Home;
