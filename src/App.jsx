import { useState } from "react";
import "./App.css";
import MainBody from "./MainBody";
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
