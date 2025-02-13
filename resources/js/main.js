//Create the 16 x 16 grid
createGrid();
function createGrid() {
    const container = document.querySelector('#grid-container');
    //Create the 16 rows
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}