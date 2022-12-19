import React from 'react';
import {Rectangle} from './../types/Figures'
import styles from './../css/Types.module.css'

function DrawingRectangle(props:Rectangle) {
    const RectangleStyle = {
        left: props.startingPoint.x,
        top: props.startingPoint.y,
        width: props.size.width + 2*props.borderWidth,
        height: props.size.height + 2*props.borderWidth,
    }
    return (
        <svg className={styles.element} style={RectangleStyle}>
            <rect
                width={props.size.width}
                height={props.size.height}
                x={props.borderWidth/2}
                y={props.borderWidth/2}
                stroke={props.borderColor}
                fill={props.fillColor}
                strokeWidth={props.borderWidth}
            ></rect>
        </svg>
    )
}

export {DrawingRectangle}