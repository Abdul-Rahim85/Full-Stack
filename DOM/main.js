// const container = document.getElementById("container");
// const input = document.getElementById("input");

// input.addEventListener("input", function () {
//   container.textContent = input.value;
// });

// const menu = document.getElementById("menu");
// const toggleBtn = document.getElementById("toggle-btn");

// toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM is loaded.");
// });

// const canvas = document.getElementById("my-canvas");
// const ctx = canvas.getContext('2d');
// console.log(ctx);
// ctx.direction = 'rtl';
// ctx.fillStyle = 'crimson';
// ctx.fillText("Abdulrahim", 1, 50);
const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");
const closeButton = document.getElementById("close-modal-btn");

openButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});