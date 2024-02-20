function createMenuPage() {
    const menu = document.createElement("div");
    menu.classList.add("menu-page");
    menu.classList.add("page");

    const h1 = document.createElement("h1");
    h1.classList.add("menu-h1");
    h1.textContent = "Menu";

    function createH2(text) {
        const h2 = document.createElement("h2");
        h2.classList.add("menu-h2");
        h2.textContent = text;
        return h2;
    }

    function createDivCard(imgSrc, h3Text) {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const cardImg = document.createElement("img");
        cardImg.classList.add("menu-card-img");
        cardImg.src = "./images/dishes/" + imgSrc;

        const cardH3 = document.createElement("h3");
        cardH3.classList.add("menu-card-h3");
        cardH3.textContent = h3Text;

        card.appendChild(cardImg);
        card.appendChild(cardH3);

        return card;
    }

    const mainCoursesH2 = createH2("Main courses");
    const appetizersH2 = createH2("Appetizers");
    const dessertsH2 = createH2("Desserts");
    const drinksH2 = createH2("Drinks");

    const mainCourses = document.createElement("div");
    mainCourses.classList.add("flex-container-row");
    mainCourses.classList.add("main-courses");
    const appetizers = document.createElement("div");
    appetizers.classList.add("flex-container-row");
    appetizers.classList.add("appetizers");
    const desserts = document.createElement("div");
    desserts.classList.add("flex-container-row");
    desserts.classList.add("desserts");
    const drinks = document.createElement("div");
    drinks.classList.add("flex-container-row");
    drinks.classList.add("drinks");

    mainCourses.appendChild(
        createDivCard("fishAndChips.jpeg", "Fish and Chips")
    );
    mainCourses.appendChild(createDivCard("shepherdPie.jpeg", "Shepherd Pie"));
    mainCourses.appendChild(
        createDivCard(
            "steakWithYorkshirePudding.jpeg",
            "Steak with Yorkshire pudding"
        )
    );
    mainCourses.appendChild(
        createDivCard("vegetarianStew.jpeg", "Vegetarian stew")
    );

    appetizers.appendChild(
        createDivCard("rabbitInTuxedo.jpeg", "Rabbit in Tuxedo")
    );
    appetizers.appendChild(
        createDivCard("englishBreakfast.jpeg", "English breakfast")
    );
    appetizers.appendChild(createDivCard("creamyPie.jpeg", "Cheese pie"));

    desserts.appendChild(createDivCard("appleCrumble.jpeg", "Apple Crumble"));
    desserts.appendChild(
        createDivCard("delicatePudding.jpeg", "Pudding Trilogy")
    );
    desserts.appendChild(
        createDivCard(
            "theWhiteRabbitCheesecake.jpeg",
            "The White Rabbit Cheesecake"
        )
    );

    drinks.appendChild(createDivCard("englishAle.jpeg", "English Ale"));
    drinks.appendChild(createDivCard("cider.jpeg", "Cider"));
    drinks.appendChild(createDivCard("tea.jpeg", "Tea"));
    drinks.appendChild(createDivCard("coffee.jpeg", "Coffee"));

    menu.appendChild(h1);
    menu.appendChild(mainCoursesH2);
    menu.appendChild(mainCourses);
    menu.appendChild(appetizersH2);
    menu.appendChild(appetizers);
    menu.appendChild(dessertsH2);
    menu.appendChild(desserts);
    menu.appendChild(drinksH2);
    menu.appendChild(drinks);

    return menu;
}

function menuPageLoader() {
    const content = document.getElementById("content");

    content.innerHTML = "";
    content.appendChild(createMenuPage());
}

export default menuPageLoader;
