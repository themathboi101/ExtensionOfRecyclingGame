class Constraint{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //this.sling1 = loadImage('sprites/sling1.png');
        //this.sling2 = loadImage('sprites/sling2.png');
        //this.sling3 = loadImage('sprites/sling3.png');
        this.constraint1= loadImage('plucking mangoes/download.png')
        this.pointB = pointB
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }

    fly(){
        this.costraint.bodyA = null;
    }

    display(){
        image(this.constriant1,200,20);
        //image(this.sling2,170,20);
        if(this.constraint.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.constraint1,pointA.x -30, pointA.y -10,15,30);
        } 
            
    }
   attach(body) {
   this.sling.bodyA=body
   }
}
