import { Presentation } from "../../types/Presentation"
import { PictureElement } from "../../types/SlideElements"
import { Slide } from "../../types/Slide"
import { FindIndexSlideById, FindSlideByIndex, PresentationWithChangedSlide } from "../CommonFunctions"

function AddPictureElement(presentation: Presentation, newPictureElement: PictureElement): Presentation //ДОБАВЛЕНИЕ КАРТИНКИ НА СЛАЙД +
{
    const workSlide = presentation.slides.find(slide => slide.workSlide) as Slide
    const idSlide = workSlide.id
    const indexSlide = FindIndexSlideById(presentation, idSlide)
    const slide = FindSlideByIndex(presentation, indexSlide)
    const changeSlide = { 
        ...slide,
        elementsList: [
            ...slide.elementsList,
            newPictureElement,
        ]
    }
    return PresentationWithChangedSlide(presentation, changeSlide, indexSlide)
}

export {AddPictureElement}