const container = document.getElementById("container");

function makeGrid(rows,columns){
for (c = 0; c < (rows * columns); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c+1);
    container.appendChild(cell);
};
};
makeGrid(16,16);