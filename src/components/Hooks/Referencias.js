import React from "react";

export default function Referencias() {
    const handleToggleMenu = (e) => {
        const $menu = document.getElementById("menu");

        if (e.target.textContent === "Menu") {
            e.target.textContent = "Cerrar";
            $menu.style.display = "block"
        } else {
            e.target.textContent = "Menu";
            $menu.style.display = "none"
        }
    }

    return (
        <div>
            <h2>Referencias</h2>
            <button id={"menu-btn"} onClick={handleToggleMenu}>Menu</button>
            <nav id={"menu"} style={{display: "none"}}>
                <a href={"#"}>Secccion 1</a><br/>
                <a href={"#"}>Secccion 2</a><br/>
                <a href={"#"}>Secccion 3</a><br/>
                <a href={"#"}>Secccion 4</a><br/>
                <a href={"#"}>Secccion 5</a><br/>
            </nav>
        </div>
    );
}