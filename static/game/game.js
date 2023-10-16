const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let gameFrame = 0;
const staggerFrame = 7;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'Idle',
        file: 'Idle.png',
        frames: 7,
    },
    {
        name:'Walk',
        file: 'Walk.png',
        frames: 6,
    }
];

const playerImage = new Image();
playerImage.src = 'game/Fire vizard/' + animationStates[0].file;
const spriteWidth = 128;
const spriteHeight = 128;

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for(let j = 0; j < state.frames; j++){
        let positionx = j * spriteWidth;
        let positiony = index * spriteHeight;
        frames.loc.push({x: positionx, y: positiony});
    }
    spriteAnimations[state.name] = frames;
});


function animate(){
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrame) % spriteAnimations["Idle"].loc.length;
    let framex = spriteWidth * position;
    let framey = spriteAnimations["Idle"].loc[position].y;
    
    context.drawImage(playerImage, framex, framey, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();