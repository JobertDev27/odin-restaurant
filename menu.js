import burger from "./images/burger.jpg";
import eggSandwich from "./images/eggSandwich.jpg";
import lamb from "./images/lambChops.jpg";
import waffle from "./images/waffle.jpg";

const foods = [
    {
        name : "Sloppy Joe",
        image : burger,
        text : "Delicious double patty with onion, lettuce, tomato and cheese paired with crispy,juicy fries!",
        price : "$5.99"
    },
    {
        name : "Standard Morning",
        image : eggSandwich,
        text : "The classic ham and egg sandwich that we all know and love!",
        price : "$3.99"
    },
    {
        name : "A noble's Meal",
        image : lamb,
        text : "Juicy, tender, soft, everything melts in your mouth exploding in flavor. A meal that is worth every penny!",
        price : "$10.99"
    },
    {
        name : "Salary Man Choice",
        image : waffle,
        text : "Coffee and blue berry waffles? what more do you want? a meal to wake you up and prepare you for the day!",
        price : "$6.99"
    }
]

export function menu() {
    const main = document.getElementById("content");

    const createElement = (tag, className, content) => {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        if (content) element.textContent = content;
        return element;
    };

    foods.forEach(({ name, image, text, price }) => {
        const item = createElement("div", "menu-item");

        const h2 = createElement("h2", null, name);
        const img = createElement("img");
        img.src = image;
        const description = createElement("p", null, text);
        const priceTag = createElement("p", "price", price);

        item.append(h2, img, description, priceTag);
        main.appendChild(item);
    });
}