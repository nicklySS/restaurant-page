function createHomePage() {
    const home = document.createElement("div");
    home.classList.add("home-page");
    home.classList.add("page");

    const h1 = document.createElement("h1");
    h1.classList.add("home-h1");
    h1.textContent = "Welcome to The White Rabbit Restaurant!";

    const frontImg = document.createElement("img");
    frontImg.classList.add("home-img");

    function createH3(text) {
        const h3 = document.createElement("h3");
        h3.classList.add("home-h3");
        h3.textContent = text;
        return h3;
    }

    const exp = createH3("Experience: ");

    function createLi(text) {
        const li = document.createElement("li");
        li.classList.add("home-li");
        li.textContent = text;
        return li;
    }

    const ul = document.createElement("ul");
    ul.classList.add("home-ul");
    ul.appendChild(
        createLi(
            "Authentic British cuisine: Fish and chips, Yorkshire pudding, shepherd's pie, steak and kidney pie, bangers and mash."
        )
    );
    ul.appendChild(
        createLi("Cozy atmosphere: Fireplace, armchairs, books, board games.")
    );
    ul.appendChild(
        createLi(
            "Perfect for: Family dinner, friendly gathering, romantic date."
        )
    );

    const descr = createH3(
        "Book a table today and immerse yourself in the atmosphere of an English fairy tale!"
    );

    home.appendChild(h1);
    home.appendChild(frontImg);
    home.appendChild(exp);
    home.appendChild(ul);
    home.appendChild(descr);

    return home;
}

function homePageLoader() {
    const content = document.getElementById("content");

    content.innerHTML = "";
    content.appendChild(createHomePage());
}

export default homePageLoader;
