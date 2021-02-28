class Hexagon{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1,
            'isStatic':true

        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("hexagon (1).png")
        World.add(world,this.body);
    }

    display(){
        push();
        var angle = this.body.angle
        translate(this.angle.body.position.x,this.angle.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,40,40)
        pop();

    }
}