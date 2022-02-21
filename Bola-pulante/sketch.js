var bola;

function preload(){
    // carregue o som aqui
    music = loadSound('music.mp3');
}

function setup(){
    tela = createCanvas(800,600);

   bola = createSprite(200,200,10,10);
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    bola.bounceOff(edges);
    drawSprites();
}