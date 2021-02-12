class tree{
    constructor(x,y,w,h){
        var options = {
            isStatic: true,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.width = width;
        this.height = height;
        this.x =x ;
        this.y = y;
        this.image = loadImage("images/tree.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
       
    
        World.add(world, this.body);
    }


display()
{
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,this.width, this.height);
    pop();
  }
}
