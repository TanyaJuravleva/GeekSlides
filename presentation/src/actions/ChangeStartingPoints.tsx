 import { Presentation } from "../types/Presentation";
// import { Coordinates } from "../types/SizeCoordinates";
// import { FindIndexSlideById, FindSlideByIndex, PresentationWithChangedSlide } from "./CommonFunctions"

// function changeSlideElementStartingPoints(presentation: Presentation, idSlide: string, newStartingPoint: Coordinates): Presentation //+- ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ ЭЛЕМЕНТА СЛАЙДА; ПЕРЕМЕЩЕНИЕ ЭЛЕМЕНТА
// {
//     const indexSlide = FindIndexSlideById(presentation,idSlide)
//     const slide = FindSlideByIndex(presentation, indexSlide)
//     let selectedObjectCollection
//     for (let i = 0; i < presentation.selectedCollection.length; i++)
//     {
//         if (presentation.selectedCollection[i].selectedSlideId = idSlide)
//         {
//             selectedObjectCollection = presentation.selectedCollection[i];
//             break
//         }
//     }
//     for(let i = 0; i < selectedObjectCollection.selectedElementsId.length; i++)
//     {
//         let indexField = FindIndexSlideTextFieldBySlide(slide, idSlide)
//         let element = slide.elementsList[indexField]
//         if (element.id = selectedObjectCollection.selectedElementsId[i])
//         {
//             element = {
//                 ...element,
//                 startingPoint: newStartingPoint,
//             }
//             for(let j = 0; j < slide.elementsList.length; j++)
//             {
//                 if (slide.elementsList[j].id == element.id)
//                 {
//                     slide.elementsList[j] = element
//                 }
//             }
//         }     
//     }

//     return presentation
// }