const container = document.querySelector('.container');
const gridSize = 24;

function initializeGrid(gridSize){
    for (let index = 0; index < gridSize ** 2; index++) {
        const newPixel = document.createElement('div');
        const relativePercentage = (1 / gridSize) * 100;
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);

        newPixel.classList.add('pixel');
        newPixel.setAttribute('style', `width: ${relativePercentage}%; padding-bottom: ${relativePercentage}%`);
        newPixel.addEventListener('mouseover', () => newPixel.style.backgroundColor = `#${randomColor}`);

        container.appendChild(newPixel);
    }

}

function resetGrid(gridSize){
    // empty DOM nodes in container 
    container.replaceChildren();    
    initializeGrid(gridSize);
}

const btn = document.querySelector('#grid-btn');
console.log(btn);
btn.addEventListener('click', () => {
    let userInput = parseInt(prompt("Please enter the grid size: ", "16"));
    if (isNaN(userInput) || userInput < 1 || userInput > 100){
        console.error(`Please enter a valid number between 1 and 100!`);
        return;
    }
    
    resetGrid(userInput);
});

initializeGrid(gridSize);
