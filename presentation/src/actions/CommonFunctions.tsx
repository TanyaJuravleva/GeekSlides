import { Presentation } from "../types/Presentation"
import { Slide } from "../types/Slide"

function FindIndexSlideById(presentation: Presentation, idSlide: string): number  //ВОЗВРАЩАЕТ ИНДЕКС СЛАЙДА В МАССИВЕ СЛАЙДОВ ПРЕЗЕНТАЦИИ
{
    return presentation.slides.findIndex( (slide) => slide.id === idSlide)
}

function FindSlideByIndex(presentation: Presentation, indexSlide: number): Slide  //ВОЗВРАЩАЕТ СЛАЙД ПО ИНДЕКСУ
{
    return presentation.slides[indexSlide]
}

function findIndexSlideElementBySlide(slide: Slide, idElement: string): number //ВОЗВРАЩАЕТ ИНДЕКС ЭЛЕМЕНТА СЛАЙДА
{
    return slide.elementsList.findIndex( (element) => element.id === idElement)
}

function findIndexSlideTextFieldBySlide(slide: Slide, idElement: string): number //ВОЗВРАЩАЕТ ИНДЕКС ТЕКСТОВОГО ЭЛЕМЕНТА
{
    return slide.elementsList.findIndex( (element) => ((element.id === idElement) && (element.type = 'text')))
}

function PresentationWithChangedSlide(presentation: Presentation, changeSlide: Slide, indexSlide: number):Presentation  //ВОЗВРАЩАЕТ ПРЕЗЕНТАЦИЮ С ИЗМЕНЕННЫМ СЛАЙДОМ
{
    return {
        ...presentation,
        slides:[
            ...presentation.slides.slice(0, indexSlide - 1),
            changeSlide,
            ...presentation.slides.slice(indexSlide + 1)
        ]
    }
}

// function findSlideElementByIndex(slide: Slide, index: number): TextElement | PictureElement | Circle | Rectangle | Triangle //ВОЗВРАЩАЕТ ЭЛЕМЕНТ ПО ИНДЕКСУ
// {
//     return slide.elementsList[index]
// }

export {FindIndexSlideById, FindSlideByIndex, PresentationWithChangedSlide}