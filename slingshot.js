class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:20,
            stiffness:0.6  
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world , this.chain);
    }

    fly(){

        this.chain.bodyA=null;
    }

    display(){
      
     if(this.chain.bodyA){
        strokeWeight(3);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y);
     }

    }

    
}




















