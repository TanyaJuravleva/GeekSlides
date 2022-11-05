type Presentation = {
    name: string,
    slides: Slide[],
    selectedCollection: Array<{
        selectedSlideId: string,
        selectedElementsIds: string[],
    }>,
};

type Editor = {
    presentation: Presentation,
    isPreview: boolean,
};

type Slide = {
    id: string,
    backgroundColor: string,
    elementsList: Array<TextElement|FigureElement|PictureElement>,
};

type Coordinates = {
    x: number,
    y: number,
};

type Size = {
    width: number,
    height: number,
};

type SlideElement = {
    id: string,
    startingPoint: Coordinates,
    size: Size,
};

type TextElement = SlideElement & {
    text: string,
    fontSize: number,
    color: string,
    font: string,
};

type PictureElement = SlideElement & {
    src: string,
};

type FigureElement = Circle | Triangle | Rectangle;

type BaseFigureElement = {
    id: string,
    fillColor: string,
    borderWidth: number,
    borderColor: string,
}

type Circle = BaseFigureElement & {
    type: 'circle',
    radiusX: number,
    radiusY: number,
    startingPoint: Coordinates,
};

type Triangle = BaseFigureElement & {
    type: 'triangle',
    pointOne: Coordinates,
    pointTwo: Coordinates,
    pointThree: Coordinates,
}

type Rectangle = BaseFigureElement & {
    type: 'rectangle',
    startingPoint: Coordinates,
};


/*ОБЩИЕ ФУНКЦИИ*/

function findIndexSlideById(presentation: Presentation, idSlide: string): number  //ВОЗВРАЩАЕТ ИНДЕКС СЛАЙДА В МАССИВЕ СЛАЙДОВ ПРЕЗЕНТАЦИИ
{
    return presentation.slides.findIndex( (slide) => slide.id === idSlide)
}

function findSlideByIndex(presentation: Presentation, indexSlide: number): Slide  //ВОЗВРАЩАЕТ СЛАЙД ПО ИНДЕКСУ
{
    return presentation.slides[indexSlide]
}

function presentationWithChangedSlide(presentation: Presentation, changeSlide: Slide, indexSlide: number):Presentation  //ВОЗВРАЩАЕТ ПРЕЗЕНТАЦИЮ С ИЗМЕНЕННЫМ СЛАЙДОМ
{
    return {
        ...presentation,
        slides:[
            ...presentation.slides.slice(0, indexSlide - 1),
            changeSlide,
            ...presentation.slides.slice(indexSlide + 1, presentation.slides.length)
        ]
    }
}

function findIndexSlideElementBySlide(slide: Slide, idElement: string): number //ВОЗВРАЩАЕТ ИНДЕКС ЭЛЕМЕНТА СЛАЙДА
{
    return slide.elementsList.findIndex( (element) => element.id === idElement)
}

function findSlideElementByIndex(slide: Slide, index: number): TextElement | PictureElement | FigureElement //ВОЗВРАЩАЕТ ЭЛЕМЕНТ ПО ИНДЕКСУ
{
    return slide.elementsList[index]
}

/* ФУНКЦИИ РАБОТЫ С ЭДИТОРОМ И ПРЕЗЕНТАЦИЕЙ */

function changePresentationName(editor: Editor, name: string): Editor //ИЗМЕНЯЕТ НАЗВАНИЕ ПРЕЗЕНТАЦИИ
{
    return {
      ...editor,
      presentation: {
        ...editor.presentation,
        name,
      },
    };
}

function stopDemonstration(editor: Editor): Editor //ПОКАЗ СЛАЙДОВ
{
    return {
      ...editor,
      isPreview: false,
    };
}

function savePresentation(editor: Editor): void //СОХРАНЕНИЕ ПРЕЗЕНТАЦИИ
{
    return 
}

function deletePresentation(editor: Editor) //УДАЛЕНИЕ ПРЕЗЕНТАЦИИ
{
    return 
}

function openPresentation(editor: Editor, src: string): void //ОТКРЫТИЕ ПРЕЗЕНТАЦИИ
{
    return 
}


/* ФУНКЦИИ РАБОТЫ СО СЛАЙДОМ И ЕГО ЭЛЕМЕНТАМИ */

function selectSlides(presentation: Presentation, ids: string[]): Presentation //ИЗМЕНЯЕТ ВЫДЕЛЕННЫЕ СЛАЙДЫ
{
    return {
        ...presentation,
        selectedSlidesId: ids
    }
}

function addSlide(presentation: Presentation, newSlide: Slide): Presentation //ДОБАВЛЕНИЕ НОВОГО СЛАЙДА
{ 
    return {
        ...presentation,
        slides: [
            ...presentation.slides,
            newSlide
        ],
    };
}


// function deleteSlide(presentation: Presentation, id: string): Presentation //УДАЛЕНИЕ СЛАЙДА
// {
//     return {
//         ...presentation,
//         slides: presentation.slides.filter((slide) => slide.id != id)
//     }
// }

function deleteSlides(presentation: Presentation, ids: string[]): Presentation //УДАЛЕНИЕ ВЫДЕЛЕННЫХ СЛАЙДОВ
{
    presentation = {
        ...presentation,
        slides: presentation.slides.filter((slide) => { 
            if (slide.id != ids[ids.length]) 
            {
                return true
            }
            if (slide.id != ids[ids.length]) 
            {
                ids.splice(ids.length, 1)
                return false
            }
        }),
    }
    return selectSlides(presentation, [findSlideByIndex(presentation, presentation.slides.length).id])
}

function douplicateSlide(presentation: Presentation, idSlide: string): Presentation //ДУБЛИРОАНИЕ СЛАЙДА
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    return {
        ...presentation,
        slides: [
            ...presentation.slides.slice(0, indexSlide),
            slide,
            ...presentation.slides.slice(indexSlide + 1, presentation.slides.length),
        ],
    };
}

function selectSlideElements(presentation: Presentation, idSlide: string, ids: string[]): Presentation //ВЫДЕЛЕНИЕ ЭЛЕМЕНТОВ СЛАЙДА
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const changeSlide = {
                            ...slide,
                            selectedElementId: ids
                        }
    return presentationWithChangedSlide(presentation, changeSlide, indexSlide)
}

function addTextElement(presentation: Presentation, idSlide: string, newTextElement: TextElement): Presentation //ДОБАВЛЕНИЕ ТЕКСТОВОГО ЭЛЕМЕНТА НА СЛАЙД
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const changeSlide = { 
        ...slide,
        elementsList: [
            ...slide.elementsList,
            newTextElement
        ]
    }
    return presentationWithChangedSlide(presentation, changeSlide, indexSlide)
}

function addPictureElement(presentation: Presentation, idSlide: string, newPictureElement: PictureElement): Presentation //ДОБАВЛЕНИЕ КАРТИНКИ НА СЛАЙД
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const changeSlide = { 
        ...slide,
        elementsList: [
            ...slide.elementsList,
            newPictureElement,
        ]
    }
    return presentationWithChangedSlide(presentation, changeSlide, indexSlide)
}
function addFigureElement(presentation: Presentation, idSlide: string, newFigureElement: FigureElement): Presentation //ДОБАВЛЕНИЕ ФИГУРЫ НА СЛАЙД
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const changeSlide = { 
        ...slide,
        elementsList: [
            ...slide.elementsList,
            newFigureElement,
        ]
    }
    return presentationWithChangedSlide(presentation, changeSlide, indexSlide)
}

// function deleteElement(presentation: Presentation, idSlide: string, idDeleteElement: string): Presentation //УДАЛЕНИЕ ЭЛЕМЕНТА
// {
//     const indexSlide = findIndexSlideById(presentation, idSlide)
//     const slide = findSlideByIndex(presentation, indexSlide)
//     const changeSlide = {
//         ...slide,
//         elementsList: slide.elementsList.filter((element) => element.id != idDeleteElement)
//     }
//     return presentationWithChangedSlide(presentation, changeSlide, indexSlide)
//     // return {
//     //     ...slide,
//     //     elementsList: slide.elementsList.filter((element) => element.id != id)
//     // }
// }

function deleteElement(presentation: Presentation, idSlide: string, idsDeleteElements: string[]): Presentation //УДАЛЕНИЕ ВЫДЕЛЕННЫХ ЭЛЕМЕНТОВ СО СЛАЙДА
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const changeSlide = { 
        ...slide,
        elementList: slide.elementsList.filter((element) => {
            if (element.id != idsDeleteElements[idsDeleteElements.length]) 
            {
                return true
            }
            if (element.id != idsDeleteElements[idsDeleteElements.length]) 
            {
                idsDeleteElements.splice(idsDeleteElements.length, 1)
                return false
            }
        })
    }

    return selectSlideElements(presentation, idSlide, [])
}

function changeFontSize(presentation:Presentation, idSlide: string, idTextField: string, size: number): Presentation // ИЗМЕНЕНИЕ РАЗМЕРА ШРИФТА ТЕКСТОВОГО ЭЛЕМЕНТА
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const indexField = findIndexSlideElementBySlide(slide, idTextField)
    const textField = findSlideElementByIndex(slide, indexField)
    const changeTextField = {
        ...textField,
        fontSize: size,
    }
    const changedSlide = {
        ...slide,
        elementsList: [
            ...slide.elementsList,
            changeTextField
        ]
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

function changeText(presentation:Presentation, idSlide: string, idTextField: string, newText: string): Presentation //ИЗМЕНЕНИЕ ТЕКСТА ТЕКСТОВОГО ЭЛЕМЕНТА
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const indexField = findIndexSlideElementBySlide(slide, idTextField)
    const textField = findSlideElementByIndex(slide, indexField)
    const changeTextField = {
        ...textField,
        text: newText
    }
    const changedSlide = {
        ...slide,
        elementsList: [
            ...slide.elementsList,
            changeTextField
        ]
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

function changeTextColor(presentation:Presentation, idSlide: string, idTextField: string, newColor: string): Presentation // ИЗМЕНЕНИЕ ЦВЕТА ТЕКСТА ТЕКСТОВОГО ЭЛЕМЕНТА
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const indexField = findIndexSlideElementBySlide(slide, idTextField)
    const textField = findSlideElementByIndex(slide, indexField)
    const changeTextField = {
        ...textField,
        color: newColor
    }
    const changedSlide = {
        ...slide,
        elementsList: [
            ...slide.elementsList,
            changeTextField
        ]
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

function changeTextFont(presentation:Presentation, idSlide: string, idTextField: string, newFont: string): Presentation //ИЗМЕНЕНИЕ ШРИФТА ТЕКСТА ТЕКСТОВОГО ЭЛЕМЕНТА
{
    const indexSlide = findIndexSlideById(presentation, idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const indexField = findIndexSlideElementBySlide(slide, idTextField)
    const textField = findSlideElementByIndex(slide, indexField)
    const changeTextField = {
        ...textField,
        font: newFont
    }
    const changedSlide = {
        ...slide,
        elementsList: [
            ...slide.elementsList,
            changeTextField
        ]
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

function changeSlideBackground(presentation: Presentation, idSlide: string, newBackgroundColor: string): Presentation // ИЗМЕНЕНИЕ ФОНА СЛАЙДА
{
    const indexSlide = findIndexSlideById(presentation,idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const changedSlide = {
        ...slide,
        backgroundColor: newBackgroundColor
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

function changeSlideElementSize(presentation: Presentation, idSlide: string, idElement: string, newSize: Size): Presentation // ИЗМЕНЕНИЕ РАЗМЕРА ЭЛЕМЕНТА СЛАЙДА
{
    const indexSlide = findIndexSlideById(presentation,idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const indexSlideElement = findIndexSlideElementBySlide(slide, idElement)
    const slideElement = findSlideElementByIndex(slide, indexSlideElement)
    const changedSlideElement = {
        ...slideElement,
        size: newSize
    }
    const changedSlide = {
        ...slide,
        elementsList: [
            ...slide.elementsList,
            changedSlideElement
        ]
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

function changeSlideElementStartingPoints(presentation: Presentation, idSlide: string, idElement: string, newStartingPoint: Coordinates): Presentation //ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ ЭЛЕМЕНТА СЛАЙДА; ПЕРЕМЕЩЕНИЕ ЭЛЕМЕНТА
{
    const indexSlide = findIndexSlideById(presentation,idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const indexSlideElement = findIndexSlideElementBySlide(slide, idElement)
    const slideElement = findSlideElementByIndex(slide, indexSlideElement)
    const changedSlideElement = {
        ...slideElement,
        startingPoint: newStartingPoint
    }
    const changedSlide = {
        ...slide,
        elementsList: [
            ...slide.elementsList,
            changedSlideElement
        ]
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

function changeCircleRadius(presentation: Presentation, idSlide: string, idElement: string, size: Size): Presentation //ИЗМЕНЕНИЯ РАДИУСА КРУГА
{
    const indexSlide = findIndexSlideById(presentation,idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const indexSlideElement = findIndexSlideElementBySlide(slide, idElement)
    const slideElement = findSlideElementByIndex(slide, indexSlideElement)
    const changedSlideElement = {
        ...slideElement,
        radiusX: size.width / 2,
        radiusY: size.height / 2,
    }
    const changedSlide = {
        ...slide,
        elementsList: [
            ...slide.elementsList,
            changedSlideElement
        ]
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

function changeTrianglePoints(presentation: Presentation, idSlide: string, idElement: string, size: Size): Presentation //ИЗМЕНЕНИЕ ПОЛОЖЕНИЯ ВЕРШИН ТРЕУГОЛЬНИКА
{
    const indexSlide = findIndexSlideById(presentation,idSlide)
    const slide = findSlideByIndex(presentation, indexSlide)
    const indexSlideElement = findIndexSlideElementBySlide(slide, idElement)
    const slideElement = findSlideElementByIndex(slide, indexSlideElement)
    const changedSlideElement = {
        ...slideElement,
        pointOne: {x: size.width / 2, y: 0},
        pointTwo: {x: 0, y: size.height},
        pointThree: {x: size.width, y: size.height},
    }
    const changedSlide = {
        ...slide,
        elementsList: [
            ...slide.elementsList,
            changedSlideElement
        ]
    }

    return presentationWithChangedSlide(presentation, changedSlide, indexSlide)
}

// function changeCircleRadius(circle: Circle, size: Size): Circle
// {
//     return {
//         ...circle,
//         radiusX: size.width / 2,
//         radiusY: size.height / 2,
//     }
// }

// function changeTrianglePoints(triangle: Triangle, size: Size): Triangle
// {
//     return {
//         ...triangle,
//         pointOne: {x: size.width / 2, y: 0},
//         pointTwo: {x: 0, y: size.height},
//         pointThree: {x: size.width, y: size.height},
//     }
// }

    //find ищет индекс по id
    // [...slides.splice(0, index), DUPLICATEDslide, ...slides.splice(index + 1, slides.length - 1)]

        //filter true оставить false удалить
    //presentation.slides.splice(1,1)