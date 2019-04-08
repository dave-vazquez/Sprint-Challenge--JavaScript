// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

}

let cuboid = new CuboidMaker({
    length: 4, 
    width: 5, 
    height: 5
});
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('Cuboid methods: length = 4, width = 5, height = 5')
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  Test your work by logging out your 
// volume and surface area.

class CubeMaker extends CuboidMaker {
    
    constructor(edge) {
        super({length: edge, width: edge, height: edge})
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
}

let cube = new CubeMaker(5);
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log('Cube methods: all properties equal to 5')
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150

/*
    Something really bugging me about this challenge...

    If a cube has equal values for length width and height,
    all these properties immediately become redudant.
    
    What I could do is something like:
    
        constructor(props) {
            super(props);
        }

    and...

        let cube = new CubeMaker( {length: 5, width: 5, height: 5} );

    But why? This way forces "the user" to enter a equal values for all properties...
    
    And a Cube isn't a Cuboid. They're different geometric objects
    with completely different properties/forumulas.

    edge is not a property of a Cuboid, and length with and height are not properties 
    of a Cube.

    Neither Object should inherit from each other, unless I'm missing something...

    This is why I chose to have one edge parameter for the Cube, set all
    the Cuboid parent properties equal to the edge,
    
    and JUST to satisfy the requirments for the stretch, I used the parent properties for the 
    volume and surfaceArea methods even though these are not properties of Cubes.

    I really just wanted to use edge by itself though...
    
    Volume of a cube:

        V = a^3     (there's not length, width or height here)

    Surface area of a cube:

        A = 6a^3    (again, no length, width or height)

    Cubes are not Cuboids, visa versa. They shouldn't inherit from each other.
    
*/
