// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
  const menuContainer = document.getElementById('menu');
  for (const [category, items] of Object.entries(menu)) {
    const categoryElem = document.createElement('h3');
    categoryElem.textContent = category;
    menuContainer.appendChild(categoryElem);

    const itemsList = document.createElement('ul');
    menuContainer.appendChild(itemsList);
    items.forEach(item => {
      const itemElem = document.createElement('li');
      itemElem.textContent = item;
      itemElem.onclick = () => addToOrder(item);
      itemsList.appendChild(itemElem);
    });
  }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
  const orderList = document.getElementById('order-items');
  const orderTotalElem = document.getElementById('order-total');

  // Create a list item for the order
  const orderItem = document.createElement('li');
  orderItem.textContent = itemName;
  orderList.appendChild(orderItem);

  // Calculate and update the total price
  const currentTotal = parseFloat(orderTotalElem.textContent);
  const itemPrice = 10; // Assuming each item costs $10 (you can customize this)
  const newTotal = currentTotal + itemPrice;
  orderTotalElem.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  displayMenuItems(menu);
}

// Call the init function to start the menu system
initMenuSystem(menu);


// This JavaScript code does the following:

// 1. Defines the menu data in the `menu` object.
// 2. Implements the `displayMenuItems` function to dynamically generate and display menu items grouped by category.
// 3. Implements the `addToOrder` function as a callback for adding items to the order. It updates the order summary and total price.
// 4. Calls the `initMenuSystem` function to initialize the menu system and display the menu items.
