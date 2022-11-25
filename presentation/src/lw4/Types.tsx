import React from 'react'
import './Types.css';

type Presentation = {
    name: string,
    logo: string,
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
    workSlide: boolean,
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
    type: 'text',
    text: string,
    fontSize: number,
    color: string,
    fontFamily: string,
    fillText: string, // заливка фона текста
    fillField: string, // заливка текстового поля
    alignment: string, // выравнивание (по левому краю, по правому краю, по центру) 
    bold: boolean, 
    italic: boolean,
    underlined: boolean,
};

type PictureElement = SlideElement & {
    type: 'picture',
    src: string,
};

type FigureElement = Circle | Triangle | Rectangle;

type BaseFigureElement = {
    id: string,
    size: Size,
    startingPoint: Coordinates,
    fillColor: string,
    borderWidth: number,
    borderColor: string,
}

type Circle = BaseFigureElement & {
    type: 'circle',
    radiusX: number,
    radiusY: number,
};

type Triangle = BaseFigureElement & {
    type: 'triangle',
    pointOne: Coordinates,
    pointTwo: Coordinates,
    pointThree: Coordinates,
}

type Rectangle = BaseFigureElement & {
    type: 'rectangle',
};

function PresentationSlide(props: Slide) {
    const SlideStyle = {
        background: props.backgroundColor
    }
    return (
        <div className='Slide' style={SlideStyle} key={props.id}>
            <p>{props.workSlide}</p>
            <div>{props.elementsList}</div>
        </div>
    )
}

function WorkSlide(props: Slide) {
    const WorkSlideStyle = {
        background: props.backgroundColor
    }
    return (
        <div className='WorkSlide' style={WorkSlideStyle} key={props.id}>
            <p>{props.workSlide}</p>
        </div>
    )
}

function PresentationPreviw(props: Presentation) {
    const Slides:Array<Slide> = props.slides;
    const SlidesList = Slides.map((slide) =>
        <PresentationSlide
            id={slide.id}
            backgroundColor={slide.backgroundColor}
            workSlide={slide.workSlide}
            elementsList={slide.elementsList}
        ></PresentationSlide>
    )
    const workSlide = Slides.map((slide) => 
        (slide.workSlide === true) ? <WorkSlide
            id={slide.id}
            backgroundColor={slide.backgroundColor}
            workSlide={slide.workSlide}
            elementsList={slide.elementsList}
        ></WorkSlide> : null
    )
    return (
        <div>
            <div className="Preview">
                <img className='PreviewLogo' src={props.logo}></img>
                <p className='PreviewHeader'>{props.name}</p>
            </div>
            <div className='WorkArea'>
                <div className='SlidesList'>
                    {SlidesList}
                </div>
                {workSlide}
            </div>
        </div>
    )
}

export {
    PresentationPreviw,
}