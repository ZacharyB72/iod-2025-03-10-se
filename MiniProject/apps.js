const selectedItems = Array.from(
  document.querySelectorAll('input[name="items"]:checked')
).map((checkbox) => checkbox.value);
console.log(selectedItems);

function switchTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.style.display = "none";
  });

  // Remove active class from all buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabId).style.display = "block";
  document
    .querySelector(`.tab-btn[onclick*="${tabId}"]`)
    .classList.add("active");
}
