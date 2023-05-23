import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import Experience from "./Experience";
import Formation from "./Formation";
import Skill from "./Skill";
import Hobbie from "./Hobbie";

function App() {
    return (
        <>
            {/* Title */}
            <Header />
            {/* Information */}
            <Contact />
            {/* Experiences */}
            <Experience />
            {/* Formation */}
            <Formation />
            {/* Skills */}
            <Skill />
            {/* Hobbies */}
            <Hobbie />
        </>
    );
}

export default App;
