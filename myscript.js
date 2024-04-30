const container = document.getElementById("container");

function changeBackgroundColor(){
    let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  
    this.style.backgroundColor='rgb(' + color.join(', ') + ')';
    };

function makeGrid(rows,columns){
for (c = 0; c <(rows * columns+columns); c++) {
    let cell = document.createElement("div");
    /*cell.innerText = (c+1);*/
    container.appendChild(cell);
    cell.addEventListener("mouseover",changeBackgroundColor);
};
};
makeGrid(16,16);
