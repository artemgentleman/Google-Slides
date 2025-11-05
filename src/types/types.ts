export interface Point {
    x: number;
    y: number;
}

export interface Shape {
    type: "rectangle" | "circle" | "triangle" | "photo";
    name: string;
    zIndex: number;
    id: number;
    leftTopPoint: Point;
    width: number;
    height: number;
}

export interface Figure extends Shape {
    color: string;
    outlineColor: string;
    outlineThickness: number;
}

export interface Circle extends Figure {
    type: "circle";
    radius: number;
    center: Point;
}

export interface Rectangle extends Figure {
    type: "rectangle";
    leftTop: Point;
    rightBottom: Point;
}

export interface Triangle extends Figure {
    type: "triangle";
    firstPoint: Point;
    secondPoint: Point;
    thirdPoint: Point;
}

export interface Photo extends Shape {
    type: "photo";
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
