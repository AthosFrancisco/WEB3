var rows, cols, bombs, table, matrix;
function showTable() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            table.rows[i].cells[j].innerHTML = matrix[i][j];
        }
    }
}
function createBombs() {
    for (var i = 0; i < bombs; ) {
        var row = Math.floor(Math.random() * rows);
        var col = Math.floor(Math.random() * cols);
        if (matrix[row][col] !== -1) {
            matrix[row][col] = -1;
            i++;
        }
    }
}
function countBomb(l, c) {
    var count = 0;
    for (var i = l - 1; i <= l + 1; i++) {
        for (var j = c - 1; j <= c + 1; j++) {
            if (i >= 0 && i < rows && j >= 0 && j < cols) {
                if (matrix[i][j] === -1)
                    count++;
            }
        }
    }
    matrix[l][c] = count;
}
function countBombs() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (matrix[i][j] !== -1) {
                countBomb(i, j);
            }
        }
    }
}
function createMatrix() {
    matrix = [];
    for (var i = 0; i < rows; i++) {
        matrix[i] = new Array(cols).fill(0);
    }
    createBombs();
    countBombs();
//    showTable();
}
function createTable() {
    table = document.querySelector("table");
    var str = "";
    for (var i = 0; i < rows; i++) {
        str += "<tr>";
        for (var j = 0; j < cols; j++) {
            str += "<td class='blocked'></td>";
        }
        str += "</tr>";
    }
    table.innerHTML = str;
}
function showBombs() {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (matrix[i][j] === -1) {
                var cell = table.rows[i].cells[j];
                cell.innerHTML = "&#128163;";
                cell.className = "bomb";
            }
        }
    }
}
function endOfGame() {
    alert("Você perdeu!");
    table.onclick = null;
    showBombs();
}
function showSpaces(l, c) {
    for (var i = l - 1; i <= l + 1; i++) {
        for (var j = c - 1; j <= c + 1; j++) {
            if (i >= 0 && i < rows && j >= 0 && j < cols) {
                var cell = table.rows[i].cells[j];
                if (cell.className !== "blank") {
                    switch (matrix[i][j]) {
                        case - 1:
                            break;
                        case 0:
                            cell.innerHTML = "";
                            cell.className = "blank";
                            showSpaces(i, j);
                            break;
                        default:
                            showCell(cell, matrix[i][j]);
                    }
                }
            }
        }
    }
}
function showCell(cell, value) {
    cell.innerHTML = value;
    cell.className = "n" + value;
}
function check(event) {
    var cell = event.target;
    if (cell.className !== "flag") {
        var row = cell.parentNode.rowIndex;
        var col = cell.cellIndex;
        switch (matrix[row][col]) {
            case - 1:
                endOfGame();
                break;
            case 0:
                showSpaces(row, col);
                break;
            default:
                showCell(cell, matrix[row][col]);
        }
    }
    var qtd = document.querySelectorAll(".blocked, .flag").length;
    if(qtd === bombs) {
        alert("Você ganhou!");
        showBombs();
    }
}
function handleFlag(event) {
    var cell = event.target;
    if (cell.className === "blocked") {
        cell.innerHTML = "&#128681;";
        cell.className = "flag";
    } else if (cell.className === "flag") {
        cell.innerHTML = "";
        cell.className = "blocked";
    }
    return false;
}
function init() {
    var select = document.querySelector("select");
    select.onchange = init;
    var option = parseInt(select.value);
    switch (option) {
        case 0:
            rows = 9;
            cols = 9;
            bombs = 10;
            break;
        case 1:
            rows = 16;
            cols = 16;
            bombs = 40;
            break;
        default:
            rows = 16;
            cols = 40;
            bombs = 99;
    }
    createTable();
    createMatrix();
    table.onclick = check;
    table.oncontextmenu = handleFlag;
}
onload = init;