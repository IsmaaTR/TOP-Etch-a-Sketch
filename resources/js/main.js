//The opacity offset
let opacity = 0.1;

//Create the 16 x 16 grid
createGrid();

//Add event listener to the change grid button
const changeGridButton = document.querySelector('#change-grid');
changeGridButton.addEventListener('click', changeGrid);

//Add event listener to reset the opacity offset
const gridContainer = document.querySelector('#grid-container');
gridContainer.addEventListener('mouseleave', () => {
    opacity = 0;
});

// Functions
function createGrid(size = 16) {
    const container = document.querySelector('#grid-container');
    //Create the 16 rows
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }

    //Add event listener to add the hover effect
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            //Generate random color for the cell
            const randomNumber = Math.floor(Math.random() * 0xFFFFFF);
            const randomColor = '#' + randomNumber.toString(16).padStart(6, '0');
            cell.style.backgroundColor = randomColor;
            cell.style.opacity = opacity;
            if (opacity < 1) {
                opacity += 0.1;
            }
        });
    });
}

function changeGrid() {
    //Ask user for the new size
    const newSize = prompt('Enter the new size of the grid (1-100):');
    if (newSize === null || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100');
        return;
    }
    //Remove the current grid
    const container = document.querySelector('#grid-container');
    container.innerHTML = '';

    //Create the new grid
    createGrid(newSize);
}