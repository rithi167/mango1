class mango{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0.8
        }
       this.x = x;
       this.y = y;
        this.r = r;
        this.image = loadImage("images/mango.png");
        this.body = Bodies.circle(x, y, this.r, options);
        
        
        World.add(world, this.body);
    }


display()
{
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, 0, 0, this.r*2, this.r*2);
    pop();
  }
}