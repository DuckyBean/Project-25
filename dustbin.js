class dustbin{ 
    constructor(){ 
    this.red1box= Bodies.rectangle(width/2+200, height-55, 200,20, {isStatic:true}); 
    World.add(world, this.red1box); 
    this.red2box = Bodies.rectangle(width/2+100, height-95, 20,200, {isStatic:true}); 
    World.add(world, this.red2box); 
    this.red3box = Bodies.rectangle(width/2+300, height-95, 20,200, {isStatic:true}); 
    World.add(world, this.red3box); 
    this.image = loadImage("dustbingreen.png"); 
    } 
display(){ 
    imageMode(CENTER); 
    image(this.image,width/2+200, height-140, 200,200); 
    }
}