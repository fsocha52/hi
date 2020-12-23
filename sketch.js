const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

function preload() {
    
    
    
}

function setup() {
    
    var canvas = createCanvas(1200, 600);
    
    engine = Engine.create;
    world = engine.world;
    
    //level two.
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);
    
    //level three.
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);
    
    //top.
    block16 = new Box(390,155,30,40);
    
    
}

function draw() {
    
    background(0);
    
    Engine.update(engine);
    
    block8.display();
    

    drawSprites();
    
}
