const container = document.getElementById("container");

function changeBackgroundColor(){
    this.style.backgroundColor='yellow';
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
