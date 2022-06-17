const slider = document.getElementById('slider');
const rangeText = document.getElementById('range-text');
slider.oninput = () => rangeText.textContent = `Size = ${slider.value} X ${slider.value}`;
slider.onmouseup = () => changeGrid();

//load defaults
let numberRows = slider.value;
rangeText.textContent = `Size = ${slider.value} X ${slider.value}`






loadGrid();

function loadGrid() {
    const containerGrid = document.getElementById('container-grid');
    
    //remove all child nodes
    while (containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.firstChild);
    }

    containerGrid.style.gridTemplateColumns = `repeat(${numberRows}, 1fr)`;
    containerGrid.style.gridTemplateRows = `repeat(${numberRows}, 1fr)`;
    
    for (let i = 0; i < (numberRows * numberRows); i++) {
        const div = document.createElement('div')
        div.classList.add('item');
        div.style.opacity = 1;
        div.onmouseover = (e) => changeOpacity(e.target);
        containerGrid.appendChild(div);
    }
}


function changeOpacity(target) {
    let opacity = target.style.opacity;
    if (+opacity >= 0.2) {
        opacity-= 0.2;
        target.style.opacity = opacity.toString();
    }
}

function changeGrid() {
    numberRows = slider.value;
    loadGrid();
}




