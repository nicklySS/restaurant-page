function createAboutPage() {
    const about = document.createElement("div");
    about.classList.add("about-page");
    about.classList.add("page");

    const h1 = document.createElement("h1");
    h1.classList.add("about-h1");
    h1.textContent = "About us";

    function createLi(text) {
        const li = document.createElement("li");
        li.classList.add("about-li");
        li.textContent = text;
        return li;
    }

    const ul = document.createElement("ul");
    ul.classList.add("about-ul");
    ul.appendChild(createLi("Phone: 8-800-555-35-35"));
    ul.appendChild(createLi("Email: thewhiterabbit@gmail.com"));
    ul.appendChild(createLi("Website: www.thewhiterabbit.com"));
    ul.appendChild(createLi("Location: 12 Tverskaya St., Moscow, Russia"));
    ul.appendChild(
        createLi(
            "Hours: Sun-Thu: 12:00 PM - 11:00 PM, Fri-Sat: 12:00 PM - 1:00 AM"
        )
    );

    about.appendChild(h1);
    about.appendChild(ul);

    return about;
}

function aboutPageLoader() {
    const content = document.getElementById("content");

    content.innerHTML = "";
    content.appendChild(createAboutPage());
}

export default aboutPageLoader;
