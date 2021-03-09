//select the main container
let gridContainer = document.querySelector('.grid-container');
//select the size change button
const btnClear = document.getElementById('clear-btn');
//loop to set default 4*4 grid
//default grid template column
gridContainer.style.gridTemplateColumns = "auto auto auto auto";
for(let i=0;i<16;++i){
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
  
    gridContainer.appendChild(gridElement);
}

// event listener for the button
btnClear.addEventListener('click',changeSize);

function changeSize(ev){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = '';
    userSelectedSize = 0;
     while(!(userSelectedSize>=1 && userSelectedSize<=100)){
         userSelectedSize =  prompt('select a size between 1 and 100');
    }
    let gridColumnText = '';
    for(let i=0;i<userSelectedSize;++i){
        gridColumnText +=' auto';
        
    }
    
    for(let i=0; i<(userSelectedSize**2);++i){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        
        gridContainer.appendChild(gridElement);
    }
    gridContainer.style.gridTemplateColumns = `${gridColumnText}`;
    gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach(element => { element.addEventListener('mouseover',changeColor) });

    }

    let gridElements = document.querySelectorAll('.grid-element');

    gridElements.forEach(element => { element.addEventListener('mouseover',changeColor) });

    function changeColor(ev){
        
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`; 

        this.style.backgroundColor = rgb;
    }

   














