import { Presentation } from "../../types/Presentation"
import { TextElement } from "../../types/SlideElements"
import { Slide } from "../../types/Slide"
import { FindIndexSlideById, FindSlideByIndex, PresentationWithChangedSlide } from "../CommonFunctions"

function AddTextElement(presentation: Presentation, newTextElement: TextElement): Presentation //ДОБАВЛЕНИЕ ТЕКСТОВОГО ЭЛЕМЕНТА НА СЛАЙД +
{
    const workSlide = presentation.slides.find(slide => slide.workSlide) as Slide
    const idSlide = workSlide.id
    const indexSlide = FindIndexSlideById(presentation, idSlide)
    const slide = FindSlideByIndex(presentation, indexSlide)
    const changeSlide = { 
        ...slide,
        elementsList: [
            ...slide.elementsList,
            newTextElement
        ]
    }
    return PresentationWithChangedSlide(presentation, changeSlide, indexSlide)
}

export {AddTextElement}