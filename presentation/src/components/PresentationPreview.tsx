import {Presentation} from './../types/Presentation'
import {Slide} from './../types/Slide'
import styles from './../css/Types.module.css'
import {WorkSlide} from './WorkSlide'
import {PresentationSlideList} from './PresentationSlideList'
import image from './../images/toolbar/image.svg'
import text from './../images/toolbar/text.svg'
import figure from './../images/toolbar/figure.png'
import {Navbar} from './NavBar';
import { addSlide } from '../actionsCreators/AddSlide'
import { TitleSlide } from '../states/TitleSlide'

function PresentationPreview(props: Presentation) {
    const Slides:Array<Slide> = props.slides;
    const workSlideData = Slides.find(slide => slide.workSlide) as Slide
    const workSlide = <WorkSlide
        id={workSlideData.id}
        backgroundColor={workSlideData.backgroundColor}
        workSlide={workSlideData.workSlide}
        elementsList={workSlideData.elementsList}
    />
    const SlidesList = Slides.map((slide) =>
        <PresentationSlideList
            id={slide.id}
            backgroundColor={slide.backgroundColor}
            workSlide={slide.workSlide}
            elementsList={slide.elementsList}
        ></PresentationSlideList>
    )
    return (
        <div>
            <div className={styles.header}>
                <img className={styles.logo} src={props.logo}></img>
                <div>
                    <p className={styles.name}>{props.name}</p>
                    <Navbar />
                    <button onClick={() => AddSlide(, TitleSlide)}</button>
                </div>
            </div>
            <div className={styles.toolbar}>
                <img className={styles.toolelement} src={image}></img>
                <img className={styles.toolelement} src={text}></img>
                <img className={styles.toolelement} src={figure}></img>
            </div>
            <div className={styles.area}>
                <div className={styles.border}>
                    <div className={styles.list}>
                        {SlidesList}
                    </div>
                </div>
                <div className={styles.work}>
                    {workSlide}
                </div>
            </div>
        </div>
    )
}

export {PresentationPreview}