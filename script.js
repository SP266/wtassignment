const menuData = {
    "Main Course": [
        { name: "Grilled Salmon with Lemon Butter Sauce", price: "RM 35.00", image: "salmon.jpg" },
        { name: "Beef Steak with Garlic Mashed Potatoes", price: "RM 45.00", image: "steak.jpg" }
    ],
    "Appetizer": [
        { name: "Spicy Chicken Wings with Blue Cheese Dip", price: "RM 18.00", image: "wings.jpg" },
        { name: "Bruschetta with Fresh Tomatoes and Basil", price: "RM 15.00", image: "bruschetta.jpg" }
    ],
    "Beverages": [
        { name: "Freshly Squeezed Orange Juice", price: "RM 8.00", image: "orange-juice.jpg" },
        { name: "Iced Green Tea with Mint", price: "RM 10.00", image: "green-tea.jpg" }
    ],
    "Side Dish": [
        { name: "Garlic Bread with Parmesan Cheese", price: "RM 12.00", image: "garlic-bread.jpg" },
        { name: "Seasoned French Fries with Truffle Oil", price: "RM 14.00", image: "fries.jpg" }
    ]
};

const menuContainer = document.getElementById("menu");

for (let category in menuData) {
    let categoryElement = document.createElement("div");
    categoryElement.classList.add("category");
    categoryElement.textContent = category;
    menuContainer.appendChild(categoryElement);

    menuData[category].forEach(item => {
        let itemElement = document.createElement("div");
        itemElement.classList.add("menu-item");

        let imgElement = document.createElement("img");
        imgElement.src = `images/${item.image}`;
        imgElement.alt = item.name;

        let detailsElement = document.createElement("div");
        detailsElement.classList.add("item-details");

        let nameElement = document.createElement("span");
        nameElement.classList.add("item-name");
        nameElement.textContent = item.name;

        let priceElement = document.createElement("span");
        priceElement.classList.add("item-price");
        priceElement.textContent = item.price;

        detailsElement.appendChild(nameElement);
        detailsElement.appendChild(priceElement);

        itemElement.appendChild(imgElement);
        itemElement.appendChild(detailsElement);
        menuContainer.appendChild(itemElement);
    });
}
