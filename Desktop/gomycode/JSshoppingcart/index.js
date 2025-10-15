//  Select all necessary elements
const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const heartButtons = document.querySelectorAll(".fa-heart");
const totalDisplay = document.querySelector(".total");

//  Function to update total price 
function updateTotal() {
  let total = 0;

  // Loop through each product card
  document.querySelectorAll(".card").forEach((card) => {
    const priceElement = card.querySelector(".unit-price");
    const quantityElement = card.querySelector(".quantity");

    // Extract numerical values
    // the pasrsefloat takes a string as input and converts it to a floating point number
    //  .replace removes the dollar sign from the string
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    const quantity = parseInt(quantityElement.textContent);

    total += price * quantity;
  });

  // Display total
  totalDisplay.textContent = `${total} $`;
}

//  Quantity increase 
plusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantityElement = btn.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal(); // Refresh total after change
  });
});

// Quantity decrease
minusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantityElement = btn.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  });
});

// Delete product 
deleteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove the product card entirely
    btn.closest(".card-body").remove();
    updateTotal();
  });
});

// Like heart toggle 
heartButtons.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
  });
});
