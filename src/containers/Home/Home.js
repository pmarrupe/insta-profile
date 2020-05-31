import React from "react";
import "./Home.css";
import Login from "../Login/Login";

const Home = ({ onLogin }) =>
    <div className="Home">
        <div className="lander">
            <h1>Instagram Profiler</h1>
            <p>Check which of your followers are not following you back!</p>
            <h2><Login onLogin={onLogin}/></h2>
        </div>

    </div>;

export default Home;

