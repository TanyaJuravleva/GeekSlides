import { Presentation } from '../types/Presentation'
import { Slide } from '../types/Slide';
import { FindSlideByIndex, FindIndexSlideById, PresentationWithChangedSlide } from './CommonFunctions';

function ChangeWorkSlide(presentation: Presentation, idSlide: string): Presentation
{
    presentation.slides.map((slide) => slide = { ...slide, workSlide:false})
    const indexSlide = FindIndexSlideById(presentation, idSlide)
    const slide = FindSlideByIndex(presentation, indexSlide)
    const changeSlide = {
        ...slide,
        workSlide: true
    }
    return PresentationWithChangedSlide(presentation, changeSlide, indexSlide)
}

export {ChangeWorkSlide}