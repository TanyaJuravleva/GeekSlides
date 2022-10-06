type Presentation = {
    name: string;
    slidesList: Slide[];
};
type Editor = {
    presentation: Presentation;
    selectedSlidesId: string[];
    selectedObjectsId: string[];
    isPreview: boolean;
};

type Slide = {
    id: string;
    background: string;
    elementsList: SlideElement[];
};

type Background = {
    color: string;
};

type Dimensions = {
    width: number;
    height: number;
};

type Position = {
    xy: number;
    dimensions: Dimensions;
};

type Coordinates = {
    x: number;
    y: number;
};

type Size = {
    width: number;
    height: number;
};

type SlideElement = {
    id: string;
    startingPoint: Coordinates;
    size: Size;
    typeOfElements: TextElement | PictureElement | FigureElement;
};

type TextElement = {
    text: string[];
    size: number;
    color: string;
    font: string;
};

type PictureElement = {
    src: string;
};

type FigureElement = {
    figureOfType: FigureShape;
    figureColor: string;
    borderWidth: number;
    borderColor: string;
    xy: Coordinates;
};

enum FigureShape {
    Circle,
    Triangle,
    Rectangle,
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