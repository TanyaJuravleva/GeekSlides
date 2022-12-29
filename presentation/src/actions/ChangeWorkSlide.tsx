import { Presentation } from '../types/Presentation'
import { FindSlideByIndex, FindIndexSlideById, PresentationWithChangedSlide } from './CommonFunctions';

function ChangeWorkSlide(presentation: Presentation, idSlide: string): Presentation
{
    presentation.slides.map((slide) => slide.workSlide = false)
    const indexSlide = FindIndexSlideById(presentation, idSlide)
    const slide = FindSlideByIndex(presentation, indexSlide)
    const changeSlide = {
        ...slide,
        workSlide: true
    }
    return PresentationWithChangedSlide(presentation, changeSlide, indexSlide)
}

export {ChangeWorkSlide}

    // return {
    //     ...presentation,
    //     slides:[
    //         ...presentation.slides.slice(0, indexSlide),
    //         changeSlide,
    //         ...presentation.slides.slice(indexSlide + 1)
    //     ]
    // }