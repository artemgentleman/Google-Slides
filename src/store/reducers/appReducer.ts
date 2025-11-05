import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index.ts'
import type {App, Point} from "../../types/types.ts";

const initialState: App = {
    slides: [],
}

export interface AddShape {
    currentSlide: number
    url?: string
}

export interface ChangeCoordinate {
    currentSlide: number
    currentShape: number
    point: Point
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addSlide: (state) => {
            state.slides.push({
                id: state.slides.length,
                shapes: []
            })
        },
        removeSlide: (state,  action: PayloadAction<number>) => {
            state.slides = state.slides.filter(s => s.id !== action.payload)
            for (let i = 0; i < state.slides.length; i++) {
                state.slides[i].id = i
            }
        },
        addRectangle: (state, action: PayloadAction<AddShape>) => {
            state.slides[action.payload.currentSlide].shapes.push({
                leftTopPoint: { x: 100, y: 100 },
                name: "Rectangle",
                zIndex: 1,
                color: "#ff0000",
                outlineColor: "#000000",
                outlineThickness: 2,
                leftTop: { x: 100, y: 100 },
                rightBottom: { x: 300, y: 250 },
                type: 'rectangle',
                id: state.slides[action.payload.currentSlide].shapes.length,
                width: 100,
                height: 100,
            })
        },
        addCircle: (state, action: PayloadAction<AddShape>) => {
            state.slides[action.payload.currentSlide].shapes.push({
                leftTopPoint: { x: 100, y: 100 },
                name: "Circle",
                zIndex: 1,
                color: "#ff0000",
                outlineColor: "#000000",
                outlineThickness: 2,
                radius: 50,
                center: { x: 200, y: 200 },
                type: 'circle',
                id: state.slides[action.payload.currentSlide].shapes.length,
                width: 100,
                height: 100,
            })
        },
        addTriangle: (state, action: PayloadAction<AddShape>) => {
            state.slides[action.payload.currentSlide].shapes.push({
                leftTopPoint: { x: 100, y: 100 },
                name: "Triangle",
                zIndex: 1,
                color: "#ff0000",
                outlineColor: "#000000",
                outlineThickness: 2,
                firstPoint:  { x: 150, y: 100 },
                secondPoint: { x: 250, y: 250 },
                thirdPoint:  { x:  50, y: 250 },
                type: 'triangle',
                id: state.slides[action.payload.currentSlide].shapes.length,
                width: 100,
                height: 100,
            })
        },
        addPhoto: (state, action: PayloadAction<AddShape>) => {
            state.slides[action.payload.currentSlide].shapes.push({
                leftTopPoint: { x: 100, y: 100 },
                name: "Photo",
                zIndex: 1,
                leftTop: { x: 100, y: 100 },
                rightBottom: { x: 300, y: 250 },
                url: action.payload.url ?? '',
                type: 'photo',
                id: state.slides[action.payload.currentSlide].shapes.length,
                width: 100,
                height: 100,
            })
        },
        changeShapeCoordinate: (state, action: PayloadAction<ChangeCoordinate>) => {
          state.slides[action.payload.currentSlide].shapes[action.payload.currentShape].leftTopPoint = action.payload.point
        },
    },
})

export const {
    addSlide,
    removeSlide,
    addRectangle,
    addCircle,
    addTriangle,
    addPhoto,
    changeShapeCoordinate,
} = appSlice.actions

export const selectCount = (state: RootState) => state.app.slides.length

export default appSlice.reducer