import {PictureElement} from './../types/SlideElements'
import styles from './../css/Types.module.css'

function DrawingPictureElement(props:PictureElement) {
    const PictureStyle = {
        width: props.size.width,
        height: props.size.height
    }
    const Picture = {
        left: props.startingPoint.x,
        top: props.startingPoint.y
    }
    return (
        <div id={props.id} className={styles.element} style={Picture}>
           <img src={props.src} style={PictureStyle}></img>
        </div>
    )
}

export {DrawingPictureElement}