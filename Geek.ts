type Presentation = {
    slides: Slide[],
}

type Slide = {
    layout: TextField,
    areas: ChousenArea,
    background: '#000',
    element: {textField, picture, figure},
}
type ChousenArea= {
    id: '',
    typeOfElement: {figure, textField, picture},
}

type TextField = {
    typeOfText: {header, mainText}
}

type Figure = {
    typeOfFigure: {circle, triangle, rectangle},
    fill: '#fff',
    stroke: '#000',
}

type Circle = {
    radius: 10,
    x: 10,
    y: 20,

}

type Triangle = {
    x1: 15,
    y1: 15,
    x2: 25,
    y2: 25,
    x3: 35,
    y3: 35,
}

type Rectangle = {
    x: 10,
    y: 20,
    width: 20,
    height: 10

}

type Header = {
    type: 'text',
    size: 20,
    font_weight: 'bold',
    font: 'Ariard',
    color: '#000',

}

type MainText = {
    type: 'text',
    size: 12,
    font_weight: 'normal',
    font: 'Ariard',
    color: '#000',

}

type Picture = {
    type: 'image',
    url: 'cat.png'
}

function addSlide(presentation: Presentation, newSlide: Slide): Presentation
{
    return {
        slides: [
            ... presentation.slides,
            newSlide
        ]
    }
}

function deleteSlide(presentation: Presentation, oldSlide: Slide): Presentation
{
    presentation.slides.splice(1,1)
    return {
        slides: [
            ... presentation.slides
        ]
    }
}
function doubleSlide(presentation: Presentation, slide: Slide): Presentation
{
    return {
        slides: [
            ... presentation.slides,
            slide
        ]
    }
}

function savePresentation(presentation: Presentation)
{
    return
}

function deletePresentation(presentation: Presentation)
{
    return
}

function openPresentation(presentation: Prese)
function addText(slide, newTextField): slide
function deleteText(slide, oldTextField): slide
function addText(slide, newTextField): slide
function deleteText(slide, oldTextField): slide
function addPicture(slide, newPicture): slide
function deletePicture(slide, oldPicture): slide
function addFigure(slide, newFigure): slide
function deleteFigure(slide, oldFigure): slide