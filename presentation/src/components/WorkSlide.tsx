import {Slide} from './../types/Slide'
import {DrawingElements} from './DrawingElements'
import styles from './../css/Types.module.css'

function WorkSlide(props: Slide) {
    const WorkSlideStyle = {
        background: props.backgroundColor,
        width: props.size.width,
        height: props.size.height
    }
    return (
        <div className={styles.workslide} style={WorkSlideStyle} key={props.id}>
            {DrawingElements(props.elementsList)}
        </div>
    )
}

export {WorkSlide}