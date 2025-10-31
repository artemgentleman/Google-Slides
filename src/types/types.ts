export interface Shape {
    name: string;
}

export interface Figure extends Shape {
    color: string;
    outlineColor: string;
    outlineThickness: number;
}

export interface Point {
    x: number;
    y: number;
}

export interface Circle extends Figure {
    radius: number;
    center: Point;
}

export interface Rectangle extends Figure {
    leftTop: Point;
    rightBottom: Point;
}

export interface Triangle extends Figure {
    firstPoint: Point;
    secondPoint: Point;
    thirdPoint: Point;
}

export interface Photo extends Shape{
    leftTop: Point;
    rightBottom: Point;
}

export interface Slide {
    id: number
    shapes: Shape[];
}

export interface App {
    name: string;
    slides: Slide[];
}
