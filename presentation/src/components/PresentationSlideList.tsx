import {Slide} from './../types/Slide'
import {DrawingElements} from './DrawingElements'
import styles from './../css/Types.module.css'
import { useState } from 'react';

function PresentationSlideList(props: Slide) {
    let Shadow = ""
    if (props.workSlide == true)
    {
        Shadow = "0px 0px 10px 14px rgb(0 0 0 / 60%)";
    }
    const SlideStyle = {
        background: props.backgroundColor,
        boxShadow: Shadow
    }
    const workSlide = DrawingElements(props.elementsList)
    return (
        <div className={styles.slide} style={SlideStyle} key={props.id}>
            {workSlide}
        </div>
    )
}

export {PresentationSlideList}