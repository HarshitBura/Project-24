class Iron {
    constructor(x, y,width,height) {
      var options = {
        'density':30,
        'friction': 3,
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
   
  

      fill("silver")
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
 
			pop();
    };
  };
  