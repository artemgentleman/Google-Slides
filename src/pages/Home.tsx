import {Page} from "../components/page/Page.tsx";
import styles from './Home.module.css'
import {type CSSProperties, useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {
    addCircle,
    addPhoto,
    addRectangle,
    addSlide,
    addTriangle,
    changeShapeCoordinate,
    removeSlide
} from "../store/reducers/appReducer.ts";
import type {ShapeType, Slide} from "../types/types.ts";
/*import {Circle} from "../components/shapes/Circle.tsx";
import {Rectangle} from "../components/shapes/Rectangle.tsx";
import {Triangle} from "../components/shapes/Triangle.tsx";
import {Photo} from "../components/shapes/Photo.tsx";*/

interface ButtonInterface {
    name: string;
    onClick: () => void;
}

export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const currentSlideStyles = {
        border: '3px solid #91c1ef',
    }

    const onClickMiniSlide = (id: number) => {
        setCurrentSlide(id);
    }

    const newSlides: Slide[] = useAppSelector((state) => state.app.slides)
    const dispatch = useAppDispatch()

    const slide = newSlides?.[currentSlide] ?? null;

    const onClickAddSlideButton = () => {
        dispatch(addSlide())
    }

    const onClickRemoveSlideButton = () => {
        dispatch(removeSlide(currentSlide))
        if (currentSlide === 0) {
            setCurrentSlide(0)
            return
        }
        setCurrentSlide(currentSlide - 1)
    }

    const buttons: ButtonInterface[] = [
        {
            name: 'add',
            onClick: () => onClickAddSlideButton(),
        },
        {
            name: 'remove',
            onClick: () => onClickRemoveSlideButton(),
        },
        {
            name: 'add rectangle',
            onClick: () => dispatch(addRectangle({currentSlide: currentSlide})),
        },
        {
            name: 'add circle',
            onClick: () => dispatch(addCircle({currentSlide: currentSlide}))
        },
        {
            name: 'add triangle',
            onClick: () => dispatch(addTriangle({currentSlide: currentSlide}))
        },
        {
            name: 'add photo',
            onClick: () => dispatch(addPhoto({currentSlide: currentSlide}))
        },
    ];

    /*const renderShape = (shape: ShapeType) => {
        switch (shape.type) {
            case 'circle':
                return <Circle shape={shape} />;
            case 'rectangle':
                return <Rectangle shape={shape} />;
            case 'triangle':
                return <Triangle shape={shape}/>;
            case 'photo':
                return <Photo shape={shape} />
            default:
                return <div>Unknown shape</div>;
        }
    };*/

    const [startPos, setStartPos] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setStartPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: React.MouseEvent, shapeId: number) => {
        if (e.buttons !== 1) return;

        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;

        console.log("Отклонение:", { dx, dy });
        dispatch(changeShapeCoordinate({
            currentSlide: slide?.id,
            currentShape: shapeId,
            point: {x: e.clientX, y: e.clientY}}
        ))
    };


    return (
        <Page>
            <div className={styles.header_container}>
                {buttons.map((button, index) => (
                    <div
                        key={index}
                        className={styles.header_button}
                        onClick={(_) => button.onClick()}
                    >
                        {button.name}
                    </div>
                ))}
            </div>
            <div className={styles.body_container}>
                <div className={styles.slides_list}>
                    {newSlides.map((slide, index) => (
                        index === currentSlide ? (
                            <div
                                key={index}
                                className={styles.mini_slide}
                                style={currentSlideStyles}
                                onClick={_ => onClickMiniSlide(index)}
                            >
                                Mini-Slide {slide.id}
                            </div>
                            ) : (
                            <div
                                key={index}
                                className={styles.mini_slide}
                                onClick={_ => onClickMiniSlide(index)}
                            >
                                Mini-Slide {slide.id}
                            </div>
                        )
                    ))}
                </div>
                {newSlides.length > 0 &&
                    <div className={styles.slide_area}>
                        <div className={styles.slide}>
                            {slide.shapes.map((shape: ShapeType, index: number) => {
                                const style = {
                                    width: shape.width,
                                    height: shape.height,
                                    top: shape.leftTopPoint.y- shape.height / 2,
                                    left: shape.leftTopPoint.x - shape.width / 2,
                                    border: '1px solid #000',
                                    position: 'fixed',
                                } as CSSProperties

                                return <div
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={(e) => handleMouseMove(e, shape.id)}                                    style={style}
                                    key={index}
                                >
                                    {shape.name}
                                </div>;
                            })}
                        </div>
                    </div>
                }
            </div>
        </Page>
    )
}