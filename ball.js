class ball{
constructor(x,y,radius){

    var ball_options ={
        restitution: 1.0
    }

    this.ball1 = Bodies.circle(x,y,radius, ball_options);
    this.x= x;
    this.y= y;
    this.radius= radius;
    World.add(world,this.ball1);   
}
display(){
    var position=this.ball1.position
    ellipseMode(RADIUS);
    ellipse(position.x, position.y, this.radius);
}

}