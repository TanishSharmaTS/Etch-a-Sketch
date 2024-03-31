const grid = document.querySelector('.grid-container');
const promptBtn = document.getElementById('size-btn');
const randomBtn = document.getElementById('random-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const eraseBtn = document.getElementById('erase-btn');
const clearBtn = document.getElementById('clear-btn');
const blackBtn = document.querySelector('.black-btn');

let gridSize;

let colorRGB = [0, 0, 0];

function gridGenerator(gridSize = 32) {

    for (let i = 1; i <= (gridSize * gridSize); i++) {

        let gridDimensions = 100 / gridSize

        let grids = document.createElement('div');

        grids.style.height = grids.style.width = `${gridDimensions}%`;

        grids.classList.add('grids');
        grid.appendChild(grids);

    }

}

promptBtn.addEventListener('click', promptCaller);

function promptCaller() {
    let val = prompt('Enter the required Dimensions');

    if (val > 100) {
        alert('Enter a value less than 100');
        promptCaller();
    }

    else {
        reset();
        gridGenerator(val);
    }
}

blackColor = blackBtn.addEventListener('click', () => {


    colorChange = grid.addEventListener('mouseover', (e) => {

        colorRGB[0] = colorRGB[1] = colorRGB[2] = 0;

        e.target.style.backgroundColor = `rgb(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]})`;
    });

});

colorChange = grid.addEventListener('mouseover', (e) => {

    e.target.style.backgroundColor = `rgb(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]})`;
});


randomColor = randomBtn.addEventListener('click', () => {

    colorChange = grid.addEventListener('mouseover', (e) => {
        colorRGB[0] = Math.floor(Math.random() * 255);
        colorRGB[1] = Math.floor(Math.random() * 255);
        colorRGB[2] = Math.floor(Math.random() * 255);


        e.target.style.backgroundColor = `rgb(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]})`;
    });

});

rainbowColor = rainbowBtn.addEventListener('click', () => {

    const rainbowContainer = [[148, 0, 211], [75, 0, 130], [0, 0, 255], [0, 255, 0], [255, 255, 0], [255, 127, 0], [255, 0, 0]];

    colorChange = grid.addEventListener('mouseover', (e) => {

        randomColor = Math.floor(Math.random() * rainbowContainer.length);

        colorRGB[0] = rainbowContainer[randomColor][0];
        colorRGB[1] = rainbowContainer[randomColor][1];
        colorRGB[2] = rainbowContainer[randomColor][2];

        e.target.style.backgroundColor = `rgb(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]})`;
    });
});

eraseColor = eraseBtn.addEventListener('click', () => {

    colorChange = grid.addEventListener('mouseover', (e) => {

        colorRGB[0] = colorRGB[1] = colorRGB[2] = 255;


        e.target.style.backgroundColor = `rgb(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]})`;
    });
})


clearGrid = clearBtn.addEventListener('click', () => {
    let grids = document.querySelectorAll('.grids');

    grids.forEach(grid => {
        grid.style.backgroundColor = 'white';
    });

    colorChange = grid.addEventListener('mouseover', (e) => {

        colorRGB[0] = colorRGB[1] = colorRGB[2] = 0;

        e.target.style.backgroundColor = `rgb(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]})`;
    });

});

//Remove all the child

function reset() {
    let grids = document.querySelectorAll('.grids');

    grids.forEach(grid => {
        grid.style.display = 'none';
    });
}


gridGenerator(gridSize);
