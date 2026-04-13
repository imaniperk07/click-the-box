const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;

// Box object
const box = {
  x: 200,
  y: 150,
  size: 40
};

// Draw the box
function drawBox() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "dodgerblue";
  ctx.fillRect(box.x, box.y, box.size, box.size);
}

// Move box to random spot
function moveBox() {
  box.x = Math.floor(Math.random() * (canvas.width - box.size));
  box.y = Math.floor(Math.random() * (canvas.height - box.size));
}

// Click detection
canvas.addEventListener("click", function (event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  if (
    mouseX >= box.x &&
    mouseX <= box.x + box.size &&
    mouseY >= box.y &&
    mouseY <= box.y + box.size
  ) {
    score++;
    document.getElementById("score").textContent = "Score: " + score;

    moveBox();   // ✅ change position
    drawBox();   // ✅ redraw canvas
  }
});

// Start the game
drawBox();
``
