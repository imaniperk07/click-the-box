const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;

// Box object
let box = {
  x: 100,
  y: 100,
  size: 40
};

// Draw box
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "dodgerblue";
  ctx.fillRect(box.x, box.y, box.size, box.size);
}

// Move box to random spot
function moveBox() {
  box.x = Math.random() * (canvas.width - box.size);
  box.y = Math.random() * (canvas.height - box.size);
}

// Click detection
canvas.addEventListener("click", function (e) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  if (
    mouseX > box.x &&
    mouseX < box.x + box.size &&
    mouseY > box.y &&
    mouseY < box.y + box.size
  ) {
    score++;
    document.getElementById("score").innerText = "Score: " + score;
    moveBox();
  }
});

// Start game
draw();
