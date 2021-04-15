class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        //loading the images
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //displaying the images
        image(this.image1,200,20);
        image(this.image2,170,20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            
        //when the bird is draged to the left side from the catapult
        if(pointA.x<220){
            
            //pointA.x-20 is bird x position pointA is the birds y position pointB.x-10 is the points x position pointB.y is the points B position
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
            image(this.image3, pointA.x-30, pointA.y-10, 15, 30);
        
            }
        //when the bird is draged to the right from the catapult
        else{

            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y);
            image(this.image3, pointA.x-30, pointA.y-10, 15, 30);
            
            }
        
        }
    }
    
}