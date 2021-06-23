const squareShapeBtn = document.getElementById("square");
const rectangleShapeBtn = document.getElementById("rectangle");
const circleShapeBtn = document.getElementById("circle");
const triangleShapeBtn = document.getElementById("triangle");
const shapeName = document.getElementById("shapeName")
const shapeHeight = document.getElementById("shapeHeight")
const shapeWidth = document.getElementById("shapeWidth")
const shapeRadius = document.getElementById("shapeRadius")
const shapeArea = document.getElementById("shapeArea")
const shapePerimeter = document.getElementById("shapePerimeter")

squareShapeBtn.addEventListener("click", () => new Square());
rectangleShapeBtn.addEventListener("click", () => new Rectangle());
circleShapeBtn.addEventListener("click", () => new Circle());
triangleShapeBtn.addEventListener("click", () => new Triangle());


class Shape {
    constructor(height, ) {
        this.name = name
        this.div = document.createElement('div');
        this.div.classList.add('Shape');
        document.getElementById('myCanvas').appendChild(this.div);
        this.div.style.left = randomVal(0, 600) + 'px';
        this.div.style.top = randomVal(0, 600) + 'px';
        this.div.style.position = "absolute";
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.Shapediv.className = 'shape';
    }
}

class Circle extends Shape {
    constructor() {
        super();

        this.Shapediv = 'Circle'
    }
}

class Triangle extends Shape {
    constructor(height) {

    }
}

class Rectangle extends Shape {
    constructor(width, height) {

    }
}

class Square extends Shape {
    constructor(length) {

    }
}