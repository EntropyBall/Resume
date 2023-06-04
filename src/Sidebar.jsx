import React from "react";
import Contact from "./Contact";
import Skill from "./Skill";
import Hobbie from "./Hobbie";

/** Side bar with children */
const Sidebar = () => {
    return (
        <aside>
            <p>Nom prénom</p>
            <img src="" alt="" />
            {/* Information */}
            <Contact />
            {/* Skills */}
            <Skill />
            {/* Hobbies */}
            <Hobbie />
        </aside>
    );
};

export default Sidebar;
