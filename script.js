// global vars
const defaultValue = 24;

// selectors
const container = document.getElementById('container');
const btnSquares = document.getElementById('btn-squares');
const btnRestart = document.getElementById('btn-restart');
const btnRainbow = document.getElementById('btn-rainbow');
const btnBlack = document.getElementById('btn-black');
// const colorPickerInput = document.getElementById('color-picker');
// const colorPicker = document.getElementById('color-picker').value;

// event listener
btnSquares.addEventListener("click", function () {
    howManySquares();
})
btnRestart.addEventListener("click", function () {
    erase()
})

// make grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    };

};

// colors
function rainbow() {
    const boxs = container.querySelectorAll('.grid-item')
    btnRainbow.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        }))
    })
}

function black() {
    const boxs = container.querySelectorAll('.grid-item')
    btnBlack.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.backgroundColor = "black";
        }))
    })
}

// function colorPick() {
//     const boxs = container.querySelectorAll('.grid-item')
//     colorPickerInput.addEventListener('change', () => {
//         boxs.forEach(box => box.addEventListener('mouseover', () => {
//             box.style.backgroundColor = colorPicker;
//         }))
//     })
// }



// change size of grid
function howManySquares() {
    let user = prompt('how many squares? between 16 and 64!')
    if (user === null || user < 16 || user > 64) {
        alert('u should put a number between 16 and 64')
    }
    else {
        deleteSquares()
        makeRows(user, user)
        rainbow()
        black()
    }
}

// erease all squares
function deleteSquares() {
    const boxs = container.querySelectorAll('.grid-item')
    boxs.forEach(function (box) {
        box.remove();
    })
}

// borrar color
function erase() {
    let boxs = container.querySelectorAll('.grid-item')
    boxs.forEach(function (box) { box.style.backgroundColor = '#f1cffa' })
};

// default grid
makeRows(defaultValue, defaultValue)
rainbow()
black()
