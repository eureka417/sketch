const container = document.getElementById('container');

function makeDivs(gridSize) {
  container.innerHTML = '';
  const totalCells = gridSize * gridSize;
  const cellSize = 500 / gridSize;

  for (let d = 0; d < totalCells; d++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    container.appendChild(cell)
  }

  background();
}

makeDivs(50);

function background() {
  const allDivs = container.querySelectorAll('div');

  allDivs.forEach(div => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
    //div.addEventListener("mouseout", () => {
    //  div.style.backgroundColor = "";
    //});
  });
}

function tamaño(){
  let input = prompt("¿Cuántos cuadrados por lado quieres? (máximo 50)");
  let gridSize = parseInt(input);

  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 50) {
    alert("Introduce un número válido entre 1 y 50");
    return;
  }
  
  makeDivs(gridSize);
}