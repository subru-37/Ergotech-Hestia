import React from "react";
import "./Landing.css";
import Apartment from "../../Assets/apartment.svg";
import TopPicks from "../../Components/TopPicks/TopPicks";
import Features from "../../Components/Features/Features";

export default function Landing() {
  return (
    <div className="sett landing-page" style={{ minHeight: "200vh" }}>
      <div className="landing-one">
        <div className="landing-content">
          <h1>Welcome to Hestia!</h1>
          <p>
            Worried that you can’t find an apartment? Find vacant apartments/
            hostels/ PG’s nearby and grab a home now!
          </p>
          <button>Search</button>
        </div>
        <div className="landing-image">
          <img src={Apartment} alt="apartment"></img>
        </div>
      </div>

      <h1>Top Picks</h1>
      <div className="top-picks-cards col">
        <div className="row">
          <TopPicks title="title" desc="desc" />
          <TopPicks title="title" desc="desc" />
          <TopPicks title="title" desc="desc" />
        </div>
        <div className="row">
          <TopPicks title="title" desc="desc" />
          <TopPicks title="title" desc="desc" />
          <TopPicks title="title" desc="desc" />
        </div>
      </div>

      <h1>Why Hestia?</h1>
      <div className="features-grid-container">
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
        <Features icon="icon" feat="text"/>
      </div>

      {/* footer */}

      <div className="footer">
        <h1>Hestia</h1>
        <div className="options">
          <h6>Home</h6>
          <h6>Search</h6>
          <h6>About Us</h6>
        </div>
        <div className="socials"></div>
      </div>
    </div>

    
  );
}
