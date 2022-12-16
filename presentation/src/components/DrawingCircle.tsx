import React from 'react';
import {Circle} from './../types/Figures'
import styles from './../css/Types.module.css'

function DrawingCircle(props:Circle) {
    const CircleStyle = {
        left: props.startingPoint.x,
        top: props.startingPoint.y,
        width: props.size.width + 2*props.borderWidth,
        height: props.size.height + 2*props.borderWidth
    }
    return (
        <svg className={styles.element} style={CircleStyle}>
            <ellipse rx={props.size.width/2 + props.borderWidth/2} ry={props.size.height/2 + props.borderWidth/2} cx={props.size.width/2 + props.borderWidth} cy={props.size.height/2 + props.borderWidth}
                    stroke={props.borderColor}
                    fill={props.fillColor}
                    strokeWidth={props.borderWidth}
            ></ellipse>
        </svg>
    )
}

export {DrawingCircle}