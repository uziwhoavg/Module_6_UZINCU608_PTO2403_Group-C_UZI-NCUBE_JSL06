// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};


//function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.querySelector('.menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h2');
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemList = document.createElement('ul');

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listItem = document.createElement('li');
            // Set the text content of the list item element to the item name
            listItem.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => {
                addToOrder(item, getPrice(item));
            });

            // Append the list item to the list of items
            itemList.appendChild(listItem);
        });

        // Append the list of items to the menu container
        menuContainer.appendChild(itemList);
    }
}

// Function to get the price of an item (for simplicity, hardcoded here)
function getPrice(item) {
    const prices = {
        "Garlic Bread": 25,
        "Bruschetta": 30,
        "Margherita Pizza": 80,
        "Spaghetti Carbonara": 90,
        "Tiramisu": 40,
        "Cheesecake": 50
    };
    return prices[item];
}

// Function to add an item to the order and update the total
function addToOrder(item, price) {
    const orderList = document.getElementById('order-list');
    const totalAmount = document.getElementById('total-amount');

    // Add item to order list
    const listItem = document.createElement('li');
    listItem.textContent = `${item} - R${price.toFixed(2)}`;
    orderList.appendChild(listItem);

    // Update total
    total += price;
    totalAmount.textContent = total.toFixed(2);
}

// Initialize menu display
displayMenuItems(menu);

let total = 0;

            


function addToOrder(itemName, itemPrice) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('orderItems'); // Assuming an element with ID 'orderItems'
    const orderTotalElement = document.getElementById('orderTotal'); // Assuming an element with ID 'orderTotal'

    // Create a list item for the order
    const listItem = document.createElement('li');

    // Set the text content of the list item to the item name
    listItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;

    // Append the list item to the order items list
    orderItemsList.appendChild(listItem);

    // Calculate and update the total price
    let currentTotal = parseFloat(orderTotalElement.textContent.replace('Total: $', ''));
    currentTotal += itemPrice;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = `Total: $${currentTotal.toFixed(2)}`;
}

// Function to display menu items and initialize event listeners
function displayMenuItems(menu) {
    const menuElement = document.getElementById('menu'); // Assuming an element with ID 'menu'

    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Add an event listener to add the item to the order when clicked
        menuItem.addEventListener('click', () => addToOrder(item.name, item.price));

        // Append the menu item to the menu element
        menuElement.appendChild(menuItem);
    });
}