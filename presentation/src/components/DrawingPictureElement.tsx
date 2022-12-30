import {PictureElement} from './../types/SlideElements'
import styles from './../css/Types.module.css'
import { useRef, useState, useEffect} from 'react'
import { UseDragAndDrops } from './UseDragAndDrops'
import { Coordinates } from '../types/SizeCoordinates'

function DrawingPictureElement(props:PictureElement) {
    let [picture, ChangePosition] = useState(props);
    useEffect(() => {
        console.log(picture.startingPoint);
    })
    function Mouse(element:PictureElement)
    {
        // //let [pos, setPos] = useState(element.startingPoint);
        // let startPos:Coordinates
        // let delta:Coordinates
        // onmousedown = (e) => {
        //     startPos = {x: e.pageX, y: e.pageY}
        //     let el = document.getElementById(element.id);
        //     if (el != null)
        //     {
        //         var targetCoords = el.getBoundingClientRect();
        //         let pr = el.parentElement
        //         if (pr != null)
        //         {
        //             var targetCoordsP = pr.getBoundingClientRect();
        //             console.log(targetCoords.x - targetCoordsP.x)
        //             console.log(targetCoords.y - targetCoordsP.y)
        //         }
        //     }
        // }
        // onmousemove = (e) => {
        //     delta = {x: e.clientX, y: e.clientY}
        // }       
        // onmouseup = (e) => {
        //     const newPos = {x: props.startingPoint.x + delta.x, y: props.startingPoint.y + delta.y}
        //console.log(element.startingPoint);
        // }
        element.startingPoint.x = 20
        element.startingPoint.y =20
        return element
    }
    const PictureStyle = {
        width: picture.size.width,
        height: picture.size.height,
        border: picture.border,
        borderWidth: picture.borderWidth,
        borderColor: picture.borderColor,
    }
    const Picture = {
        left: picture.startingPoint.x,
        top: picture.startingPoint.y
    }
    return (
        <div onMouseOver={() => ChangePosition( picture = Mouse(picture))} id={picture.id} className={styles.element} style={Picture} key={picture.id}>
           <img src={picture.src} style={PictureStyle} key={picture.id}></img>
        </div>
    )
}

export {DrawingPictureElement}