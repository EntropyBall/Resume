import { useState } from "react";
import "./App.css";
import MainBody from "./MainBody";
import Sidebar from "./Sidebar";

/* Maybe reforged it to astro */
function App() {
    return (
        <>
            <Sidebar />
            <MainBody />
        </>
    );
}

export default App;
