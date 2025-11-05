// ===== トリックルーム風タイル背景 =====
const container = document.getElementById("trickroom");
const colors = ["tile-dark", "tile-light", "tile-white"];

const rows = 10;
const cols = 15;
const grid = [];

// タイル配置（隣接チェックあり）
for (let r = 0; r < rows; r++) {
  grid[r] = [];
  for (let c = 0; c < cols; c++) {
    let color;
    do {
      color = colors[Math.floor(Math.random() * colors.length)];
      const up = r > 0 ? grid[r - 1][c] : null;
      const left = c > 0 ? grid[r][c - 1] : null;
      // 上・左と同じ色は避ける
    } while (
      (r > 0 && color === grid[r - 1][c]) ||
      (c > 0 && color === grid[r][c - 1])
    );

    grid[r][c] = color;

    const div = document.createElement("div");
    div.className = `trickroom-tile ${color}`;
    container.appendChild(div);
  }
}
