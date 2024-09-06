class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }
  
function addItem(inventory, item) {
    inventory[inventory.length] = item; 
}
  

function updateItem(inventory, id, newDetails) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].id === id) {
        for (let key in newDetails) {
          inventory[i][key] = newDetails[key]; 
        }
        break; 
      }
    }
}
  

function deleteItem(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].id === id) {
        for (let j = i; j < inventory.length - 1; j++) {
          inventory[j] = inventory[j + 1]; 
        }
        inventory.length -= 1; 
        break; 
      }
    }
}
  
function printInventory(inventory) {
    let inventoryString = JSON.stringify(inventory, null, 2);
    console.log(inventoryString);
  }
  
let inventory = [
    { id: 1, name: 'Apple', quantity: 10, price: 0.5 },
    { id: 2, name: 'Banana', quantity: 20, price: 0.2 }
  ];
  
console.log("Initial Inventory:");
printInventory(inventory);
  
addItem(inventory, { id: 3, name: 'Orange', quantity: 15, price: 0.7 });
console.log("\nAdding item:");
printInventory(inventory);
  
updateItem(inventory, 2, { quantity: 30 });
console.log("\nUpdating item:");
printInventory(inventory);
  

deleteItem(inventory, 2);
console.log("\nDeleting item:");
printInventory(inventory);
  