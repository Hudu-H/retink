import React from "react";
import "./styles.scss";

const Hero = () => {
  return (
    <div className="container-hero">
      <div className="container-left">
        <div className="text">
          <h1>HeyJames!</h1>
          <h4>Lets create something awesome today&nbsp;<span>✨&#x1F4AB;</span></h4>
        </div>
        <div className="container-btn">
          <button>
            <span>Start Creating</span>
          </button>
        </div>
      </div>
      <div className="container-right"> 
        <div className="dropbox">
          <form action="#">
            <label htmlFor="brands"></label>
            <select name="" id="shops">
              <option value="lefties">Zara ventures</option>
              <option value="lefties">Lefties</option>
              <option value="pull&bear">Pull & bear</option>
              <option value="primarks">Primarks</option>
            </select>
          </form>
        </div>
        <div className="text-secondary">
          <p className="first">You should have more engagement by 6pm today, try posting then&nbsp;<span>📅</span></p>
          <p>Try our SEO optimization tool to increase engagement by 40%&nbsp;<span>&#x1F525;</span></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
