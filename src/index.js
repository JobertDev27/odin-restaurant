import "./style.css";
import { menu } from "./menu";
import { contact } from "./contact";

(function (){
    const main = document.getElementById("content");
    const menuBtn = document.getElementById("menu-btn");
    const contactBtn = document.getElementById("contact-btn");

    menuBtn.addEventListener("click", () => {
        clear();
        menu();
    });

    contactBtn.addEventListener("click", () => {
        clear();
        contact();
    });

    const clear = () => {
        while(main.firstChild) {
            main.removeChild(main.lastChild);
        }
    };
})();
