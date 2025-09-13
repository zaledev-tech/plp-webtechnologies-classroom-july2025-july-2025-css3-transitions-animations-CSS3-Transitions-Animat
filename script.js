// === Part 2: JavaScript Functions ===

// Function with parameters and return value
function calculateTotal(quantity, price) {
  return quantity * price;
}

// Example usage: local vs global scope
let globalDiscount = 0.9; // global variable

function getDiscountedTotal(quantity, price) {
  let total = calculateTotal(quantity, price); // local scope
  return total * globalDiscount;
}

// Log to console
console.log("Total: $" + calculateTotal(3, 50));        // 150
console.log("Discounted: $" + getDiscountedTotal(3, 50)); // 135


// === Part 3: Combining CSS + JS ===

// Animate box on button click
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", function() {
  // Toggle spin class to start/stop animation
  box.classList.toggle("spin");
});

// Modal popup logic
const modal = document.getElementById("modal");
document.getElementById("openModal").addEventListener("click", function() {
  modal.classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", function() {
  modal.classList.add("hidden");
});
