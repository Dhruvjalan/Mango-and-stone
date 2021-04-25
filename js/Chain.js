class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.005,
            length: 10
        }
       

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){


        if(this.chain.bodyA){
        //var posA = this.chain.bodyA.position;
        //var posB = this.chain.pointB;
        strokeWeight(4);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
        //line(200,200,300,300);
    }
    }

    fly(){
        this.chain.bodyA = null;
    }
      
    
    
}