class Ship{
    constructor(x, y, width, height, boatPos){
        var options ={
            restitution: 0.8,
            friction: 0.8,
            density: 1.0
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.boatPosition = boatPos;

        this.image = loadImage("./assets/ship.png")

        World.add(world, this.body);

    }

    display(){
        push();

        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,this.boatPosition, this.width, this.height);

        pop();
    }
}