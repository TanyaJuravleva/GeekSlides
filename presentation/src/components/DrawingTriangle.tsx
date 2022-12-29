import React from 'react';
import {Triangle} from './../types/Figures'
import styles from './../css/Types.module.css'

function DrawingTriangle(props:Triangle) {
    const TriangleStyle = {
        left: props.startingPoint.x,
        top: props.startingPoint.y,
        width: props.size.width + 2*props.borderWidth,
        height: props.size.height + 2*props.borderWidth
    }
    // const x1:string = String(props.pointOne.x)
    // const y1:string = String(props.pointOne.y)
    // const x2:string = String(props.pointTwo.x)
    // const y2:string = String(props.pointTwo.y)
    // const x3:string = String(props.pointThree.x)
    // const y3:string = String(props.pointThree.y)
    const x1:string = String(props.size.width/2 + props.borderWidth)
    const y1:string = String(props.borderWidth)
    const x2:string = String(props.borderWidth + props.size.height)
    const y2:string = String(props.size.height + props.borderWidth)
    const x3:string = String(props.size.width + props.borderWidth - props.size.height)
    const y3:string = String(props.size.height + props.borderWidth)
    const Points:string = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
    return (
        <svg className={styles.element} style={TriangleStyle} key={props.id}>
            <polygon key={props.id} 
                    points={Points}                     
                    stroke={props.borderColor}
                    fill={props.fillColor}
                    strokeWidth={props.borderWidth}/>
        </svg>
    )
}

export {DrawingTriangle}