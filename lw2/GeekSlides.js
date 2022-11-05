const editor = {
    presentation,
    selectedObjects: [slide.id, picture.id, figure.id, textField.id],
    isPreview: false,
}

const presentation = {
    slides: [slide],
    name: 'My Presentation',
}

const slide = {
    id: '',
    background: '#000',
    elements: [textField, picture, figure],
}

const textField = {
    id: '',
    type: 'text',
    height: 20,
    width: 70,
    font_weight: 'normal',
    font: 'Ariard',
    color: '#000',
    position: {
        x: 20,
        y: 20,
    },
    text: 'abc',
}

const figure = {
    id: '',
    position: {
        x: 20,
        y: 20,
    },
    //type: 'figure',
    //typeOfFigure: {circle, triangle, rectangle},
    fill: '#fff',
    stroke: '#000',
}

const circle = {
    ...figure,
    type: 'circle',
    radius: 10,
}

const triangle = {
    ...figure,
    type: 'triangle',
    x1: 15,
    y1: 15,
    x2: 25,
    y2: 25,
    x3: 35,
    y3: 35,
}

const rectangle = {
    ...figure,
    type: 'rectangle',
    height: 20,
    width: 30,
}

const picture = {
    id: '',
    type: 'image', 
    position: {
        x: 20,
        y: 20,
    },
    height: 50,
    width: 50,
    url: 'cat.png'
}

function addSlide(presentation, newSlide): presentation
function deleteSlide(presentation, oldSlide): presentation
function doubleSlide(presentation, slide): presentation
function savePresentation(presentation)
function deletePresentation(presentation)
function openPresentation(presentation)
function addText(slide, newTextField): slide
function deleteText(slide, oldTextField): slide
function addText(slide, newTextField): slide
function deleteText(slide, oldTextField): slide
function addPicture(slide, newPicture): slide
function deletePicture(slide, oldPicture): slide
function addFigure(slide, newFigure): slide
function deleteFigure(slide, oldFigure): slide