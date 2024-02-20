import homePageLoader from "./home.js";
import menuPageLoader from "./menu.js";
import aboutPageLoader from "./about.js";

function header() {
    const header = document.createElement("header");

    const restaurantName = document.createElement("h1");
    restaurantName.id = "restaurant-name";
    restaurantName.textContent = "The White Rabbit";

    const nav = document.createElement("nav");

    const createNavButton = (text, func) => {
        const button = document.createElement("button");
        button.classList.add("nav-button");
        button.textContent = text;
        button.addEventListener("click", (e) => {
            const navButtons = document.querySelectorAll(".nav-button");
            if (e.target.classList.contains("nav-button-active")) return;
            navButtons.forEach((el) => {
                el.classList.remove("nav-button-active");
            });
            e.target.classList.add("nav-button-active");
            
            if (func == 1) {
                homePageLoader();
            }
            else if (func == 2) {
                menuPageLoader();
            }
            else {
                aboutPageLoader();
            }
        });
        return button;
    };

    const homeBtn = createNavButton("Home", 1);
    homeBtn.classList.add("nav-button-active");

    const menuBtn = createNavButton("Menu", 2);
    const aboutBtn = createNavButton("About", 3);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);

    header.appendChild(restaurantName);
    header.appendChild(nav);

    return header;
}

function main() {}

function footer() {
    const footer = document.createElement('footer');
    const fH1 = document.createElement('h1');
    fH1.classList.add('footer-h1');
    fH1.innerHTML = `Copyright © ${new Date().getFullYear()} <a href="https://github.com/nicklySS">nicklySS</a>`

    footer.appendChild(fH1);

    return footer;
}

function websiteLoader() {
    const body = document.body;
    const content = document.getElementById("content");

    body.prepend(header());
    homePageLoader();
    body.append(footer());

}

export default websiteLoader();
