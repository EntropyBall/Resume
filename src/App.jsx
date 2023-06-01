import { useState } from "react";
import "./App.css";
import MainBody from "./MainBody";
import Skill from "./Skill";
import Hobbie from "./Hobbie";
import Sidebar from "./Sidebar";

function App() {
    return (
        <>
            <Sidebar />
            <MainBody />
        </>
    );
}

export default App;
