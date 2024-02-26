

import App from "../../App"
import classes from "./Navbar.module.css" 
const Navbar =  () => {

    return (
            <nav className={classes.menu}>Navbar
                <a href="../pages/nesSection">NES</a>
                <a href="../pages/snesSection">SNES</a>
                <a href="../pages/segaSection">Sega Genesis</a>
                <a href="../pages/psxSection">PSX</a>
            </nav>
            
    );

};

const products = () => {

    return (

        <section class="container">
        <div class="grid__box"></div>
        <div class="grid__box"></div>
        <div class="grid__box"></div>
        <div class="grid__box"></div>
        <div class="grid__box"></div>
        <div class="grid__box"></div>
        <div class="grid__box"></div>
        <div class="grid__box"></div>
        <div class="grid__box"></div>

    </section>
    )


}

export default Navbar



