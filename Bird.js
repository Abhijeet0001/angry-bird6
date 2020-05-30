class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = []
    this.smoke = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>5 && gamestate==="launch"){
var position = [this.body.position.x,this.body.position.y]
this.path.push(position)
    }
for(var i =0; i<this.path.length;i++)
image(this.smoke,this.path[i][0],this.path[i][1])

    super.display();
  }
}
