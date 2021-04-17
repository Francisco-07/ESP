// global vars
let promptValue;

const defaultValue = 24;

// selectors
const container = document.getElementById('container');
const btnSquares = document.getElementById('btn-squares');
const btnRestart = document.getElementById('btn-restart');
const selectDivs = document.querySelectorAll('.grid-item');
const DefaultColor = document.getElementById('color-picker').value;
let colorPicker = DefaultColor;

// listeners
btnSquares.addEventListener("click", function () {
    howManySquares();
    makeRows(promptValue, promptValue)
})
btnRestart.addEventListener("click", function () {
    erase()
})
document.getElementById("color-picker").addEventListener('change', (e) => {

    colorPicker = e.target.value;

})


// make cells
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener("mouseover", changeColor);
    };
};

// color
function changeColor(e) {
    e.target.style.backgroundColor = colorPicker;
}

// input cantidad
function howManySquares() {
    makeRows(defaultValue, defaultValue)
    promptValue = prompt("how many squares? between 16-64, cancel to use default!")

    if (promptValue > 64 || promptValue < 16) {
        promptValue = defaultValue;
        alert("You must enter a positive integer. (between 16-64)");
    }
    else {
        promptValue = promptValue;
    }
    while (container.firstChild) container.removeChild(container.firstChild);
}

// default 
makeRows(defaultValue, defaultValue)

// borrar color
function erase() {
    let wholeGrid = container.querySelectorAll('div')
    wholeGrid.forEach(function (oneGrid) { oneGrid.style.backgroundColor = '#fff' })
};