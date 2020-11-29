class Bob{
    constructor(x,y){
    var options = {
        isStatic:false,    
        restitution:1.0,
        friction:0,
      density:0.8
    }
    this.x = x;
    this.y = y;
    this.r = 25;
    this.body = Bodies.circle(this.x,this.y,25,options);
    
    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
  
    
   rectMode(CENTER)
    ellipse(pos.x,pos.y,50,50);
    
}
}