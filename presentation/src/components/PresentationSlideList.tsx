import {Slide} from './../types/Slide'
import {DrawingElements} from './DrawingElements'
import styles from './../css/Types.module.css'

function PresentationSlideList(props: Slide) {
    const SlideStyle = {
        background: props.backgroundColor,
        width: props.size.width,
        height: props.size.height
    }
    const workSlide = DrawingElements(props.elementsList)
    return (
        <div className={styles.slide} style={SlideStyle} key={props.id}>
            {workSlide}
        </div>
    )
}

export {PresentationSlideList}