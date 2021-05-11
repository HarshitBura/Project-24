class Stone {
    constructor(x, y,width,height) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y,width,height, options);
  
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     
      push();
   

      fill("darkRed")
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
 
			pop();
    };
  };
  