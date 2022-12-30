import { Presentation } from "../../types/Presentation"
import { Circle } from "../../types/Figures"
import { Slide } from "../../types/Slide"
import { FindIndexSlideById, FindSlideByIndex, PresentationWithChangedSlide } from "../CommonFunctions"

function AddCircle(presentation: Presentation, newFigureElement: Circle): Presentation 
{
    const workSlide = presentation.slides.find(slide => slide.workSlide) as Slide
    const idSlide = workSlide.id
    const indexSlide = FindIndexSlideById(presentation, idSlide)
    const slide = FindSlideByIndex(presentation, indexSlide)
    const changeSlide = { 
        ...slide,
        elementsList: [
            ...slide.elementsList,
            newFigureElement,
        ]
    }
    return PresentationWithChangedSlide(presentation, changeSlide, indexSlide)
}

export {AddCircle}