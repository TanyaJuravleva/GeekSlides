import { Presentation } from '../types/Presentation'
import { Slide } from '../types/Slide'
import { Editor } from '../types/Editor'
import { Size, Coordinates } from '../types/SizeCoordinates'
import { Triangle, Circle, Rectangle } from '../types/Figures'
import { TextElement, PictureElement } from '../types/SlideElements'

/* ФУНКЦИИ РАБОТЫ СО СЛАЙДОМ И ЕГО ЭЛЕМЕНТАМИ */

// function selectSlides(presentation: Presentation, ids: string[]): Presentation //ИЗМЕНЯЕТ ВЫДЕЛЕННЫЕ СЛАЙДЫ +
// {
//     presentation.selectedCollection = []
//     for(let i = 0; i < ids.length; i++)
//     {
//         let indexSlide = findIndexSlideById(presentation, ids[i]);
//         let slide = findSlideByIndex(presentation, indexSlide);
//         let idsElement:string[] = []
//         for (let i = 0; i < slide.elementsList.length; i++)
//         {
//             let id = slide.elementsList[i].id
//             idsElement.splice(idsElement.length, 0, id);
//         }
//         presentation.selectedCollection.splice(presentation.selectedCollection.length, 0, {selectedSlideId: ids[i], selectedElementsIds: idsElement})
//     }
//     return presentation
// }

function AddSlide(presentation: Presentation, newSlide: Slide): Presentation //ДОБАВЛЕНИЕ НОВОГО СЛАЙДА +
{ 
    const slides = presentation.slides.map((slide) =>{return slide = {...slide, workSlide:false}})
    return {
        ...presentation,
        slides: [
            ...slides,
            newSlide
        ],
    };
}

export {AddSlide};
// function deleteSlides(presentation: Presentation): Presentation //УДАЛЕНИЕ ВЫДЕЛЕННЫХ СЛАЙДОВ +
// {
//     let idsCollection = presentation.selectedCollection;
//     presentation = {
//         ...presentation,
//         slides: presentation.slides.filter((slide) => { 
//             let found = false;
//             for(let i = 0; i < idsCollection.length; i++)
//             {
//                 if (slide.id = idsCollection[i].selectedSlideId)
//                 {
//                     found = true;
//                     idsCollection.splice(i, 1)
//                     break
//                 }
//             }
//             return !found
//         }),
//     }
//     return presentation
// }

// function douplicateSlide(presentation: Presentation, idSlide: string): Presentation //ДУБЛИРОАНИЕ СЛАЙДА +
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     return {
//         ...presentation,
//         slides: [
//             ...presentation.slides.slice(0, indexSlide),
//             slide,
//             ...presentation.slides.slice(indexSlide + 1, presentation.slides.length),
//         ],
//     };
// }

// function selectSlideElements(presentation: Presentation, idSlide: string, ids: string[]): Presentation //ВЫДЕЛЕНИЕ ЭЛЕМЕНТОВ СЛАЙДА +
// {
//     return {
//         ...presentation,
//         selectedCollection: [{
//             selectedSlideId: idSlide,
//             selectedElementsIds: ids,
//         }]
//     }
// }

// function addPictureElement(presentation: Presentation, idSlide: string, newPictureElement: PictureElement): Presentation //ДОБАВЛЕНИЕ КАРТИНКИ НА СЛАЙД +
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     const changeSlide = { 
//         ...slide,
//         elementsList: [
//             ...slide.elementsList,
//             newPictureElement,
//         ]
//     }
//     return presentationWithChangedSlide(presentation, changeSlide, indexSlide)
// }
// function addFigureElement(presentation: Presentation, idSlide: string, newFigureElement: FigureElement): Presentation //ДОБАВЛЕНИЕ ФИГУРЫ НА СЛАЙД +
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     const changeSlide = { 
//         ...slide,
//         elementsList: [
//             ...slide.elementsList,
//             newFigureElement,
//         ]
//     }
//     return presentationWithChangedSlide(presentation, changeSlide, indexSlide)
// }

// function deleteElement(presentation: Presentation, idSlide: string): Presentation //УДАЛЕНИЕ ВЫДЕЛЕННЫХ ЭЛЕМЕНТОВ СО СЛАЙДА +-
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let selectedCollection
//     for (let i = 0; i < presentation.selectedCollection.length; i++)
//     {
//         if (presentation.selectedCollection[i].selectedSlideId = idSlide)
//         {
//             selectedCollection = presentation.selectedCollection[i];
//         }
//     }
//     const changeSlide = { 
//         ...slide,
//         elementList: slide.elementsList.filter((element) => {
//             let found = false;
//             for(let i = 0; i < selectedCollection.selectedElementsIds.length; i++)
//             {
//                 if (slide.id = selectedCollection.selectedElementsId[i])
//                 {
//                     found = true;
//                     selectedCollection.selectedElementsId.splice(i, 1)
//                     break
//                 }
//             }
//             if (!found) 
//             {
//                 return true
//             }
//             if (found) 
//             {
//                 return false
//             }
//         }),
//     }
//     return presentationWithChangedSlide(presentation, changeSlide, indexSlide)
// }

// //иммутабельно передавать presentationWithChangedSlide(presentation, changeSlide, indexSlide)
// function changeFontSize(presentation:Presentation, idSlide: string, size: number): Presentation // ИЗМЕНЕНИЕ РАЗМЕРА ШРИФТА ЭЛЕМЕНТА +-
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     fontSize: size,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }      
//     }

//     return presentation
// }

// function changeText(presentation:Presentation, idSlide: string, idTextField: string, newText: string): Presentation //ИЗМЕНЕНИЕ ТЕКСТА ТЕКСТОВОГО ЭЛЕМЕНТА +-
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     text: newText,
//                 }
//             }
//             for(let j = 0; j < slide.elementsList.length; j++)
//             {
//                 if (slide.elementsList[j].id == textField.id)
//                 {
//                     slide.elementsList[j] = textField
//                 }
//             }
//         }        
//     }

//     return presentation
// }

// function changeTextColor(presentation:Presentation, idSlide: string, idTextField: string, newColor: string): Presentation // ИЗМЕНЕНИЕ ЦВЕТА ТЕКСТА ТЕКСТОВОГО ЭЛЕМЕНТА +-
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     color: newColor,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }        
//     }

//     return presentation
// }

// function changeTextFontFamily(presentation:Presentation, idSlide: string, idTextField: string, newFontFamily: string): Presentation //ИЗМЕНЕНИЕ ШРИФТА ТЕКСТА ТЕКСТОВОГО ЭЛЕМЕНТА +-
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     fontFamily: newFontFamily,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }        
//     }

//     return presentation
// }

// function changeFillText(presentation:Presentation, idSlide: string, idTextField: string, newFillText: string): Presentation // ИЗМЕНЕНИЕ ЦВЕТА ЗАЛИВКИ ТЕКСТА ТЕКСТОВОГО ЭЛЕМЕНТА +-
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     fillText: newFillText,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }        
//     }

//     return presentation
// }

// function changeFillTextField(presentation:Presentation, idSlide: string, idTextField: string, newFillField: string): Presentation // ИЗМЕНЕНИЕ ЦВЕТА ЗАЛИВКИ ТЕКСТОВОГО ЭЛЕМЕНТА +-
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     fillField: newFillField,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }        
//     }

//     return presentation
// }

// function changeTextBold(presentation:Presentation, idSlide: string, isBold: boolean): Presentation
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     bold: isBold,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }      
//     }

//     return presentation
// }

// function changeTextItalic(presentation:Presentation, idSlide: string, isItalic: boolean): Presentation
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     italic: isItalic,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }      
//     }

//     return presentation
// }

// function changeTextUnderlined(presentation:Presentation, idSlide: string, isUnderlined: boolean): Presentation
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     underlined: isUnderlined,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }      
//     }

//     return presentation
// }

// function changeTextAlignment(presentation:Presentation, idSlide: string, newAlignment: string): Presentation // ИЗМЕНЕНИЕ ВЫРАВНИВАНИЯ ТЕКСТА +-
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let textField:TextElement
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'text') {
//             textField = element
//             if (textField.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 textField = {
//                     ...textField,
//                     alignment: newAlignment,
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == textField.id)
//                     {
//                         slide.elementsList[j] = textField
//                     }
//                 }
//             }
//         }      
//     }

//     return presentation
// }

// function changeSlideBackground(presentation: Presentation, idSlide: string, newBackgroundColor: string): Presentation // ИЗМЕНЕНИЕ ФОНА СЛАЙДА +-
// {
//     const indexSlide = findIndexSlideById(presentation,idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     const changedSlide = {
//         ...slide,
//         backgroundColor: newBackgroundColor
//     }

//     return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
// }

// function changeSlideElementSize(presentation: Presentation, idSlide: string, newSize: Size): Presentation // ИЗМЕНЕНИЕ РАЗМЕРА выделенных ЭЛЕМЕНТов СЛАЙДА +-
// {
//     const indexSlide = findIndexSlideById(presentation,idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
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
//         let indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         let element = slide.elementsList[indexField]
//         if (element.id = selectedObjectCollection.selectedElementsId[i])
//         {
//             element = {
//                 ...element,
//                 size: newSize,
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

// function changeSlideElementStartingPoints(presentation: Presentation, idSlide: string, newStartingPoint: Coordinates): Presentation //+- ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ ЭЛЕМЕНТА СЛАЙДА; ПЕРЕМЕЩЕНИЕ ЭЛЕМЕНТА
// {
//     const indexSlide = findIndexSlideById(presentation,idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
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
//         let indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
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

// function changeCircleRadius(presentation: Presentation, idSlide: string, newRadiusX: number, newRadiusY: number): Presentation //+- ИЗМЕНЕНИЯ РАДИУСА КРУГА
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let circleFigure:Circle
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'circle') {
//             circleFigure = element
//             if (circleFigure.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 circleFigure = {
//                     ...circleFigure,
//                     radiusX: newRadiusX,
//                     radiusY: newRadiusY
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == circleFigure.id)
//                     {
//                         slide.elementsList[j] = circleFigure
//                     }
//                 }
//             }
//         }        
//     }

//     return presentation
// }

// //+-
// function changeTrianglePoints(presentation: Presentation, idSlide: string, newPointOne: Coordinates, newPointTwo: Coordinates, newPointThree: Coordinates): Presentation //ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ ВЕРШИН ТРЕУГОЛЬНИКА
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     let indexField
//     let triangleFigure:Triangle
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
//         indexField = findIndexSlideTextFieldBySlide(slide, idSlide)
//         const element = slide.elementsList[indexField]
//         if (element.type === 'triangle') {
//             triangleFigure = element
//             if (triangleFigure.id = selectedObjectCollection.selectedElementsId[i])
//             {
//                 triangleFigure = {
//                     ...triangleFigure,
//                     pointOne: newPointOne,
//                     pointTwo: newPointTwo,
//                     pointThree: newPointThree
//                 }
//                 for(let j = 0; j < slide.elementsList.length; j++)
//                 {
//                     if (slide.elementsList[j].id == triangleFigure.id)
//                     {
//                         slide.elementsList[j] = triangleFigure
//                     }
//                 }
//             }
//         }        
//     }

//     return presentation
// }

// // function changeCircleRadius(circle: Circle, size: Size): Circle
// // {
// //     return {
// //         ...circle,
// //         radiusX: size.width / 2,
// //         radiusY: size.height / 2,
// //     }
// // }

// // function changeTrianglePoints(triangle: Triangle, size: Size): Triangle
// // {
// //     return {
// //         ...triangle,
// //         pointOne: {x: size.width / 2, y: 0},
// //         pointTwo: {x: 0, y: size.height},
// //         pointThree: {x: size.width, y: size.height},
// //     }
// // }

//     //find ищет индекс по id
//     // [...slides.splice(0, index), DUPLICATEDslide, ...slides.splice(index + 1, slides.length - 1)]

//         //filter true оставить false удалить
//     //presentation.slides.splice(1,1)

