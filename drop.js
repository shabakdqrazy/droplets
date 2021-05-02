class Drop{
    constructor(x,y){
        var options={
            'friction':0.001,
            'restitution':0.2
        }
        this.rain=Bodies.circle(x,y,5,options)
        this.radius=5
        World.add(world,this.rain)

    }
    showDrop(){
        fill("blue")
        ellipseMode(RADIUS);
       var pos=this.rain.position;
        ellipse(pos.x,pos.y,this.radius,this.radius)
        
    }
    updateY(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }

    
    
}
}