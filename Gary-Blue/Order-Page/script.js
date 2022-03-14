var food_item = document.getElementById("food-item");
var confirm_button = document.getElementById("confirm-quantity");
var order_index = 1;
var place_order_button = document.querySelector("#place-order-button");

var new_order_button = document.querySelector("#newOrderButton");
var form = document.querySelector("#order-form");

function newOrder() {
  {
    order_index;
  }
  globalThis;
  var orders = document.getElementById("orders");
  var newOrder = document.createElement("div");
  newOrder.innerHTML = `
  <div>
    <label for="foodDropdown"></label>
    <select
      name="foodDropdown"
      id="foodDropdown"
      class="item-select"
      onchange="handleSelect(this.value, ${order_index})"
    >
      <option value="optionSelect" disabled selected>
        Choose your option
      </option>

      <option value="main" disabled>------Main------</option>
      <option value="The Big Gary">The Big Gary</option>
      <option value="Regular Burger">Regular Burger</option>
      <option value="Classic Cheeseburger">
        Classic Cheeseburger
      </option>
      <option value="The Works Burger">The Works Burger</option>
      <option value="Chili Burger">Chili Burger</option>
      <option value="Juicy Lucy Burger">Juicy Lucy Burger</option>
      <option value="Hot Dog">Hot Dog</option>
      <option value="Chili Dog">Chili Dog</option>

      <option value="breakfast" disabled>
        ------Breakfast------
      </option>
      <option value="Scrambled Eggs">Scrambled Eggs</option>
      <option value="Meat Omelette">Meat Omelette</option>
      <option value="Veggie-Cheese Omelette">
        Veggie-Cheese Omelette
      </option>
      <option value="Western Omelette">Western Omelette</option>
      <option value="Eggs on Toast">Eggs on Toast</option>
      <option value="Waffles">Waffles</option>
      <option value="Pancakes">Pancakes</option>
      <option value="Breakfast Burrito">Breakfast Burrito</option>

      <option value="Sides" disabled>
        ------Appetizers & Sides------
      </option>
      <option value="Classic Fries">Classic Fries</option>
      <option value="Wings">Chicken Wings</option>
      <option value="Nachos">Nachos</option>
      <option value="Mozza Sticks">Mozza Sticks</option>

      <option value="Beverages" disabled>
        ------Beverages------
      </option>
      <option value="Beverage">Pepsi</option>
      <option value="Beverage">7up</option>
      <option value="Beverage">Sprite</option>
      <option value="Beverage">Fanta</option>
      <option value="Beverage">Root Beer</option>
      <option value="Beverage">Lemonade</option>
      <option value="Beverage">Soda Pop</option>
      <option value="Beverage">Pepsi</option>

      <option value="Milkshakes" disabled>
        ------Shakes------
      </option>
      <option value="Shake">Vanilla Shake</option>
      <option value="Shake">Strawberry Shake</option>
      <option value="Shake">Cherry Shake</option>
      <option value="Shake">Banana Split</option>
      <option value="Cake">Cheesecake Slice</option>
      <option value="Shake">Moomoo Milk</option>
      <option value="Shake">Berry Juice</option>
    </select>
  </div>
  <div>
    <input
      id="food-quantity"
      type="number"
      style="max-width: 3ch"
      max="5"
      min="0"
      value="0"
      class="food-quantity"
      onchange="quantitySelect(this.value, ${order_index})"
    />
  </div>
  <div class="food-price">$0.00</div>
  <div class="food-total">$0.00</div>`;
  newOrder.classList.add("order");
  orders.appendChild(newOrder);
  order_index++;
}

function handleSelect(food_object, occurance) {
  var food_price = document.getElementsByClassName("food-price")[occurance];
  var food_name =
    document.getElementsByClassName("item-select")[occurance].innerText;
  switch (food_object) {
    case "The Big Gary":
      food_price.innerHTML = `$${14.75}`;
      break;
    case "Regular Burger":
      food_price.innerHTML = `$${8.99}`;
      break;
    case "Classic Cheeseburger":
      food_price.innerHTML = `$${9.45}`;
      break;
    case "The Works Burger":
      food_price.innerHTML = `$${11.99}`;
      break;
    case "Chili Burger":
      food_price.innerHTML = `$${10.45}`;
      break;
    case "Juicy Lucy Burger":
      food_price.innerHTML = `$${10.75}`;
      break;
    case "Hot Dog":
      food_price.innerHTML = `$${8.75}`;
      break;
    case "Chili Dog":
      food_price.innerHTML = `$${9.75}`;
      break;
    case "Classic Fries":
      food_price.innerHTML = `$${3.75}`;
      break;
    case "Wings":
      food_price.innerHTML = `$${12.75}`;
      break;
    case "Nachos":
      food_price.innerHTML = `$${11.99}`;
      break;
    case "Mozza Sticks":
      food_price.innerHTML = `$${6.99}`;
      break;
    case "Scrambled Eggs":
      food_price.innerHTML = `$${7.55}`;
      break;
    case "Meat Omelette":
      food_price.innerHTML = `$${9.25}`;
      break;
    case "Veggie-Cheese Omelette":
      food_price.innerHTML = `$${8.99}`;
      break;
    case "Western Omelette":
      food_price.innerHTML = `$${8.99}`;
      break;
    case "Eggs on Toast":
      food_price.innerHTML = `$${6.99}`;
      break;
    case "Waffles":
      food_price.innerHTML = `$${7.99}`;
      break;
    case "Pancakes":
      food_price.innerHTML = `$${7.99}`;
      break;
    case "Breakfast Burrito":
      food_price.innerHTML = `$${9.99}`;
      break;
    case "Beverage":
      food_price.innerHTML = `$${1.25}`;
      break;
    case "Shake":
      food_price.innerHTML = `$${3.25}`;
      break;
    case "Cake":
      food_price.innerHTML = `$${4.25}`;
      break;
  }
}

function quantitySelect(num, occurance) {
  var food_price = document
    .getElementsByClassName("food-price")
    [occurance].innerHTML.replace("$", "");
  var food_total = document.getElementsByClassName("food-total")[occurance];
  total_cost = parseFloat(food_price, 10) * num;
  food_total.innerHTML = `$${total_cost.toFixed(2)}`;
}

function calcSubTotal() {
  sub_total = 0;
  {
    order_index;
  }
  globalThis;
  for (i = 0; i < order_index; i++) {
    var item_cost = document
      .getElementsByClassName("food-total")
      [i].innerHTML.replace("$", "");
    sub_total += parseFloat(item_cost, 10);
  }

  // Accumulate new total amount and display results
  total = document.getElementById("subtotal");
  hst = document.getElementById("hst");
  order_total = document.getElementById("final-total");
  var hst_owing = sub_total * 0.15;
  var final_total = sub_total + hst_owing;
  total.innerHTML = `$${sub_total.toFixed(2)}`;
  hst.innerHTML = `$${hst_owing.toFixed(2)}`;
  order_total.innerHTML = `$${final_total.toFixed(2)}`;
}

var cart = document.querySelector("#shopping-cart");

class Order {
  constructor(name, quantity, price, total) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.total = total;
  }
}

class UI {
  static addOrderToList(order) {
    var orderName = document.createElement("div");
    orderName.className = "grid-item-name";
    var orderQuant = document.createElement("div");
    orderQuant.className = "grid-item-quantity";
    var orderPrice = document.createElement("div");
    orderPrice.className = "grid-item-price";
    var orderTotal = document.createElement("div");
    orderTotal.className = "grid-item-total";
    var del = document.createElement("div");
    del.className = "delete";

    orderName.innerHTML = `${order.name}`;
    orderQuant.innerHTML = `${order.quantity}`;
    orderPrice.innerHTML = `$${order.price}`;
    orderTotal.innerHTML = `$${order.total}`;
    del.innerHTML = `<a href="">X</a>`;

    cart.appendChild(orderName);
    cart.appendChild(orderQuant);
    cart.appendChild(orderPrice);
    cart.appendChild(orderTotal);
    cart.appendChild(del);
  }
}

class ShoppingCart {
  // To get existing orders from storage
  static getOrders() {
    var orders;
    if (localStorage.getItem("orders") === null) {
      orders = [];
    } else {
      orders = JSON.parse(localStorage.getItem("orders"));
    }
    return orders;
  }

  // To add new orders
  static addOrders(order) {
    var orders = ShoppingCart.getOrders();
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  // To display already stored orders
  static displayOrders() {
    var orders = ShoppingCart.getOrders();
    var order_number = 1;
    orders.forEach(function (order) {
      var order_seperator = document.createElement("div");
      order_seperator.className = "order_number";
      order_seperator.innerHTML = `Order #: ${order_number}`;
      cart.appendChild(order_seperator);
      order_number++;
      order.forEach(function (detail) {
        UI.addOrderToList(detail);
      });
    });
  }

  // To remove an order from storage
  static removeOrder(line) {
    var orders = Store.getOrders();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        console.log(`Isbn: ${isbn}`);
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}
