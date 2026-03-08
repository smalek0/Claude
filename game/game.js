const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state
const state = {
  running: true,
};

function update() {
  // TODO: update game logic here
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // TODO: draw game elements here
  ctx.fillStyle = '#fff';
  ctx.font = '32px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('Game ready — start building!', canvas.width / 2, canvas.height / 2);
}

function loop() {
  if (!state.running) return;
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
