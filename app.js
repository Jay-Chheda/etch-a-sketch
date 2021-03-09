const container = document.getElementById("grid-container");
console.log(container);













const button = document.querySelector('button');
button.addEventListener('click',promptUser);

function promptUser(){
    let gridColumn = '';
    let gridNumber = 0;
    container.style.gridTemplateColumns = `${gridColumn}` ;
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
 
    while(!(gridNumber>=1 && gridNumber<=100)){
       gridNumber=  Number(window.prompt('Choose number of columns for grid (1-100)!'));
    }

    
    for(let i =1;i<=gridNumber;++i){

        gridColumn+= ' auto'
    
    }
    console.log(gridColumn);
   
    console.log(gridNumber);
    container.style.gridTemplateColumns = `${gridColumn}` ;
    
    for(let i =1;i<=(gridNumber*gridNumber);++i){

        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
        
    }



}
