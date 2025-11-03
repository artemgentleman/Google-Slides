import {Page} from "../components/page/Page.tsx";
import styles from './Home.module.css'
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks.ts";
import {addCircle, addPhoto, addRectangle, addSlide, addTriangle, removeSlide} from "../store/reducers/appReducer.ts";
import type {ShapeType, Slide} from "../types/types.ts";
import {Circle} from "../components/shapes/Circle.tsx";
import {Rectangle} from "../components/shapes/Rectangle.tsx";
import {Triangle} from "../components/shapes/Triangle.tsx";

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

    const slide = newSlides[currentSlide]

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

    const renderShape = (shape: ShapeType) => {
        switch (shape.name) {
            case 'Circle':
                return <Circle shape={shape} />;

            case 'Rectangle':
                return <Rectangle shape={shape} />;

            case 'Triangle':
                return <Triangle shape={shape}/>;

            case 'Photo':
                return <div className={styles.photo}>photo</div>

            default:
                return <div>Unknown shape</div>;
        }
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
                            {slide.shapes.map((shape: ShapeType, index) => (
                                <div key={index}>
                                    {renderShape(shape)}
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </Page>
    )
}