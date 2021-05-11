const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane;
var hammer;
var rubber0,rubber1,rubber2,rubber3,rubber4,rubber5,rubber6,rubber7,rubber8,rubber9;
var stone0,stone1,stone2,stone3,stone4;
var iron0, iron1, iron2, iron3, iron4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber0 = new Rubber(600, 0, 130);
    rubber1 = new Rubber(10, 00, 130);
    rubber2= new Rubber(700, 00, 130);
    rubber3 = new Rubber(900, 00, 130);
    rubber4= new Rubber(595, 00, 130);
    rubber5 = new Rubber(299, 00, 130);
    rubber6 = new Rubber(444, 00, 130);
    rubber7 = new Rubber(798, 00, 130);
    rubber8 = new Rubber(1006, 00, 130);
    rubber9 = new Rubber(988, 00, 130);
    stone0= new Stone(200,100,70,100);
    stone1= new Stone(300,100,70,100);
    stone2= new Stone(400,100,70,100);
    stone3= new Stone(500,100,70,100);
    stone4= new Stone(600,100,70,100);
    iron0 = new Iron(700,200,70,100);
    iron1 = new Iron(800,200,70,100);
    iron2 = new Iron(900,200,70,100);
    iron3 = new Iron(1000,200,70,100);
    iron4 = new Iron(100,200,70,100);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber0.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    stone0.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    iron0.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    
 
}