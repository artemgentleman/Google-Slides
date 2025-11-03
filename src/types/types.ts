export interface Shape {
    name: string;
    zIndex: number;
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
    url: string
}

export type ShapeType = Rectangle | Circle | Triangle | Photo;

export interface Slide {
    id: number
    shapes: ShapeType[];
}

export interface App {
    slides: Slide[];
}
