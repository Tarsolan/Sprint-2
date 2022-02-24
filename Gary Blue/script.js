var food_item = document.getElementById("food-item");
var confirm_button = document.getElementById("confirm-quantity");

function handleSelect(food_object, occurance) {
  var food_price = document.getElementsByClassName("food-price")[occurance];
  switch (food_object) {
    case "Big Gary Chicken Sandwich":
      food_price.innerHTML = `$${13.99}`;
      break;
    case "Poutine":
      food_price.innerHTML = `$${7.99}`;
      break;
    case "Pepsi":
      food_price.innerHTML = `$${2.99}`;
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
  for (i = 0; i <= 10; i++) {
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
