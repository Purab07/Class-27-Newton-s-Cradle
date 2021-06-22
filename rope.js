class Rope{
    constructor(body1,body2,xOffset){
        var options = {bodyA:body1,bodyB:body2,pointB:{x:xOffset,y:0}}
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
        this.xOffset = xOffset
    }
    display(){
        strokeWeight(2);
        var anchor1X = this.rope.bodyA.position.x
        var anchor1Y = this.rope.bodyA.position.y
        var anchor2X = this.rope.bodyB.position.x + this.xOffset
        var anchor2Y = this.rope.bodyB.position.y
        line(anchor1X,anchor1Y,anchor2X,anchor2Y)
    }
}