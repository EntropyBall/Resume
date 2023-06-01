import React from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import Formation from "./Formation";

/** Side bar */
const Sidebar = () => {
    return (
        <aside>
            <p>Nom prénom</p>
            <img src="" alt="" />
            {/* SKills */}
            {/* Languages */}
            {/* Information */}
            <Contact />
            {/* Experiences */}
            <Experience />
            {/* Formation */}
            <Formation />
        </aside>
    );
};

export default Sidebar;
