import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index.ts'
import type {App} from "../../types/types.ts";

const initialState: App = {
    slides: [],
}

export interface AddShape {
    currentSlide: number
    url?: string
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
                name: "Rectangle",
                zIndex: 1,
                color: "#ff0000",
                outlineColor: "#000000",
                outlineThickness: 2,
                leftTop: { x: 100, y: 100 },
                rightBottom: { x: 300, y: 250 }
            })
        },
        addCircle: (state, action: PayloadAction<AddShape>) => {
            state.slides[action.payload.currentSlide].shapes.push({
                name: "Circle",
                zIndex: 1,
                color: "#ff0000",
                outlineColor: "#000000",
                outlineThickness: 2,
                radius: 50,
                center: { x: 200, y: 200 }
            })
        },
        addTriangle: (state, action: PayloadAction<AddShape>) => {
            state.slides[action.payload.currentSlide].shapes.push({
                name: "Triangle",
                zIndex: 1,
                color: "#ff0000",
                outlineColor: "#000000",
                outlineThickness: 2,
                firstPoint:  { x: 150, y: 100 },
                secondPoint: { x: 250, y: 250 },
                thirdPoint:  { x:  50, y: 250 }
            })
        },
        addPhoto: (state, action: PayloadAction<AddShape>) => {
            state.slides[action.payload.currentSlide].shapes.push({
                name: "Photo",
                zIndex: 1,
                leftTop: { x: 100, y: 100 },
                rightBottom: { x: 300, y: 250 },
                url: action.payload.url ?? '',
            })
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
} = appSlice.actions

export const selectCount = (state: RootState) => state.app.slides.length

export default appSlice.reducer