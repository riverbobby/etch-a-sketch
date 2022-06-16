//populate the grid
let numberRows = 16;//default

const containerGrid = document.getElementById('container-grid');
containerGrid.style.gridTemplateColumns = `repeat(${numberRows}, 1fr)`;
containerGrid.style.gridTemplateRows = `repeat(${numberRows}, 1fr)`;

for (let i = 0; i < (numberRows * numberRows); i++) {
    const div = document.createElement('div')
    div.classList.add('item');
    div.style.opacity = 1;
    div.onmouseover = (e) => changeOpacity(e.target);
    containerGrid.appendChild(div);
}

function changeOpacity(target) {
    let opacity = target.style.opacity;
    if (+opacity >= 0.2) {
        opacity-= 0.2;
        target.style.opacity = opacity.toString();
    }
}
