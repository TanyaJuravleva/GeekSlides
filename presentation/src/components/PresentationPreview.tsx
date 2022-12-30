import {Presentation} from './../types/Presentation'
import {Slide} from './../types/Slide'
import styles from './../css/Types.module.css'
import {WorkSlide} from './WorkSlide'
import {PresentationSlideList} from './PresentationSlideList'
import {Navbar} from './NavBar'
import { Toolbar } from './Toolbar'
import { useState } from 'react'

import { TitleSlide } from '../states/TitleSlide'
import { TitleText } from '../states/TitleText'
import { TitlePicture } from '../states/TitlePicture'

import { AddSlide } from '../actions/AddSlide'
import { AddTextElement } from '../actions/SlideElements/AddTextElement'
import { AddPictureElement } from '../actions/SlideElements/AddPictureElement'
import { ChangeWorkSlide } from '../actions/ChangeWorkSlide'
import { AddCircle } from '../actions/SlideElements/AddCircle'
import { TitleCircle } from '../states/TitleCircle'
import { TitleTriangle } from '../states/TitleTriangle'
import { AddTriangle } from '../actions/SlideElements/AddTriangle'
import { TitleRectangle } from '../states/TitleRectangle'
import { AddRectangle } from '../actions/SlideElements/AddRectangle'

function PresentationPreview(props: Presentation) {
    let [presentation, ChangePresentation] = useState(props);
    let [idSlide, ChangeSlideId] = useState(0)
    let [idElement, ChangeElementId] = useState(0)
    const Slides:Array<Slide> = presentation.slides;
    const SlidesList = Slides.map((slide) =>
        <div onClick={() => ChangePresentation(presentation = ChangeWorkSlide(presentation, slide.id))}>
            <PresentationSlideList
                id={slide.id}
                backgroundColor={slide.backgroundColor}
                workSlide={slide.workSlide}
                elementsList={slide.elementsList}
            ></PresentationSlideList>
        </div>
    )
    const workSlideData = Slides.find(slide => slide.workSlide) as Slide
    const workSlide = <WorkSlide
        id={workSlideData.id}
        backgroundColor={workSlideData.backgroundColor}
        workSlide={workSlideData.workSlide}
        elementsList={workSlideData.elementsList}
    />
    return (
        <div key={props.id}>
            <div className={styles.header}>
                <img className={styles.logo} src={presentation.logo}></img>
                <div>
                    <p key={props.id} className={styles.name}>{presentation.name}</p>
                    <Navbar />
                </div>
            </div>
            <button onClick={() =>{ ChangeSlideId(idSlide = idSlide + 1); ChangePresentation(presentation = AddSlide(presentation, TitleSlide(idSlide)))} }>Добавить слайд</button>
            <button onClick={() =>{ ChangeElementId(idElement = idElement + 1); ChangePresentation(presentation = AddTextElement(presentation, TitleText(idElement)))}}>Добавить текст</button>
            <button onClick={() =>{ ChangeElementId(idElement = idElement + 1); ChangePresentation(presentation = AddPictureElement(presentation, TitlePicture(idElement)))}}>Добавить картинку</button>
            <button onClick={() =>{ ChangeElementId(idElement = idElement + 1); ChangePresentation(presentation = AddCircle(presentation, TitleCircle(idElement)))}}>Добавить круг</button>
            <button onClick={() =>{ ChangeElementId(idElement = idElement + 1); ChangePresentation(presentation = AddTriangle(presentation, TitleTriangle(idElement)))}}>Добавить триугольник</button>
            <button onClick={() =>{ ChangeElementId(idElement = idElement + 1); ChangePresentation(presentation = AddRectangle(presentation, TitleRectangle(idElement)))}}>Добавить прямоугольник</button>
            <Toolbar />
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

/*                    <Navbar />
                    <button onClick={() => AddSlide(, TitleSlide)}></button> */


                    /*onClick={() => addSlide(StartPresentation, TitleSlide)} */