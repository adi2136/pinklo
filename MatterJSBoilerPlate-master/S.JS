class S{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.4,
            friction:0

            
        }
        this.r=10;
        this.body=Bodies.circle(x,y,this.r,options)
        

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        fill("yellow")
        ellipseMode(RADIUS)
        noStroke()
        ellipse(0,0,this.r,this.r)
        pop()
    }
}