export function contact () {
    const header = document.createElement("h2");
    const body = document.createElement("section");
    const main = document.getElementById("content");

    const addElement = text => {
        const info = document.createElement("p");
        info.textContent = text;
        return info;
    }

    header.textContent = "CONTACT US:";

    const email = addElement("Email: foodhub@food.com");
    const number = addElement("Contact Number: 092462784252");
    const twitter = addElement("Twitter: @foodhub");

    body.classList.add("contact-container");
    body.append(header, email, number, twitter);
    main.appendChild(body);
}