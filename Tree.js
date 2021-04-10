class Tree{
    constructor(x,y){
this.tree=Bodies.rectangle(x,y,30,30);
this.width=30
this.height=30;
World.add(world,this.tree);
    }
    display(){
    var pos=this.tree.position
    rectMode(CENTER);
    fill(255);
    rect(pos.x,pos.y,this.width,this.height);
    }
}
