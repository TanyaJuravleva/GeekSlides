const presentation = {
    name: 'My Presentation',
    slides: [slide],
    selectedCollection: Array({
        selectedSlideId: '1',
        selectedElementsIds: ['1', '2', '5']
    })
}

const editor = {
    presentation,
    isPreview: false,
}

const slide = {
    id: '',
    backgroundColor: '#000',
    elementsList: [textElement, pictureElement, figureElement],
}

const coordinates = {
    x: 5,
    y: 5,
};

const size = {
    width: 400,
    height: 500,
};

const slideElement = {
    id: '',
    startingPoint: coordinates,
    size: size,
};

const textElement = slideElement & {
    type: 'text',
    text: 'abc',
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Arial',
    fillText: 'yellow',
    fillField: 'pink',
    alignment: 'center',
    bold: true,
    italic: true,
    underlined: true,
}

const pictureElement = slideElement & {
    type: 'picture',
    src: '/picture/my_cat.png',
};

const figureElement = circle | triangle | rectangle;

const baseFigureElement = {
    id: '',
    fillColor: 'red',
    borderWidth: 10,
    borderColor: 'blue',
}

const circle = baseFigureElement & {
    type: 'circle',
    radiusX: 10,
    radiusY: 15,
    startingPoint: coordinates,
}

const triangle = baseFigureElement & {
    type: 'triangle',
    pointOne: coordinates,
    pointTwo: coordinates,
    pointThree: coordinates,
}

const rectangle = baseFigureElement & {
    type: 'rectangle',
    startingPoint: coordinates,
}

// function addSlide(presentation, newSlide): presentation
// function deleteSlide(presentation, oldSlide): presentation
// function doubleSlide(presentation, slide): presentation
// function savePresentation(presentation)
// function deletePresentation(presentation)
// function openPresentation(presentation)
// function addText(slide, newTextField): slide
// function deleteText(slide, oldTextField): slide
// function addText(slide, newTextField): slide
// function deleteText(slide, oldTextField): slide
// function addPicture(slide, newPicture): slide
// function deletePicture(slide, oldPicture): slide
// function addFigure(slide, newFigure): slide
// function deleteFigure(slide, oldFigure): slide