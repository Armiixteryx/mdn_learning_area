let list = document.querySelector('.output ul');
let totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
let products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99', 'Trousers:31.99', 'Shoes:23.99'];

for (let i = 0; i < products.length; i++) { // number 2
  // number 3
  console.log("i = " + i);

  let item = products[i].split(':');
  console.log("item = " + item);

  let itemName = item[0];
  console.log("itemName = " + itemName);

  let itemPrice = Number(item[item.length - 1]);
  console.log("itemPrice = " + itemPrice);

  // number 4
  total += itemPrice;
  console.log("total = " + total.toFixed(2));
  
  // number 5
  itemText = itemName + " - $" + itemPrice;
  console.log("itemText = " + itemText);
  
  let listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

