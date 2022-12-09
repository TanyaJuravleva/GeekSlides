import React, { useState } from 'react'
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
    elementsList: Array<TextElement|PictureElement|Circle|Rectangle|Triangle>
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
    size: Size,
};

function PresentationSlide(props: Slide) {
    const SlideStyle = {
        background: props.backgroundColor
    }
    const workSlide = Elements(props.elementsList)
    return (
        <div className='Slide' style={SlideStyle} key={props.id}>
            {workSlide}
        </div>
    )
}

function TextElement(props:TextElement) {
    let Bold = "unset"
    let Underlined = "none"
    let Italic = "unset"
    if (props.bold)
    {
        Bold = "bold"
    }
    if (props.underlined)
    {
        Underlined = "underline"
    }
    if (props.italic)
    {
        Italic =  "italic"
    }
    const [textAlign, setAlign] = useState('left');
    const WorkTextStyle = {
        background: props.fillField,
        marginLeft: props.startingPoint.x,
        marginTop:props.startingPoint.y,
        width: props.size.width + '%',
        height: props.size.height + '%',
    }
    const WorkText = {
        background:props.fillText,
        color: props.color,
        fontSize: props.fontSize,
        fontFamily: props.fontFamily,
        fontWeight: Bold,
        fontStyle: Italic,
        textDecoration: Underlined,
    }
    return (
        <div id={props.id} style={WorkTextStyle}>
            <p style={WorkText}>{props.text}</p>
        </div>
    )
}

function PictureElement(props:PictureElement) {
    return (
        <div id={props.id}>
           <img src={props.src} width={props.size.width} height={props.size.height}></img>
        </div>
    )
}

function Circle(props:Circle) {
    return (
        <svg>
            <ellipse rx={props.radiusX} ry={props.radiusY} cx={props.startingPoint.x} cy={props.startingPoint.y}
                    transform={"rotate(-65, 98, 94)"}
                    stroke-opacity={0.5}
                    stroke={props.borderColor}
                    fill={props.fillColor}
            ></ellipse>
        </svg>
    )
}

function Triangle(props:Triangle) {
    const x1:string = String(props.pointOne.x)
    const y1:string = String(props.pointOne.y)
    const x2:string = String(props.pointTwo.x)
    const y2:string = String(props.pointTwo.y)
    const x3:string = String(props.pointThree.x)
    const y3:string = String(props.pointThree.y)
    const Points:string = x1 + ',' + y1 + ' ' + x2 + ',' + y2 + ' ' + x3 + ',' + y3;
    return (
        <svg>
            <polygon points={Points}/>
        </svg>
    )
}

function Rectangle(props:Rectangle) {
    return (
        <svg>
            <rect
                width={props.size.width}
                height={props.size.height}
                x={props.startingPoint.x}
                y={props.startingPoint.y}
            ></rect>
        </svg>
    )
}

function Elements(elementsList: Array<TextElement|PictureElement|Circle|Rectangle|Triangle>)
{
    let ElementsArray:Array<any> = []
    let textField:TextElement
    let pictureField:PictureElement
    let circleField:Circle
    let triangleField:Triangle
    let rectangleField:Rectangle
    if (elementsList)
    {
        for (let i = 0; i < elementsList.length; i++)
        {
            let element = elementsList[i];
            if (element.type === "text")
            {
                textField = element;
                ElementsArray.push(
                <TextElement
                    text={textField.text}
                    fontSize={textField.fontSize}
                    id={textField.id}
                    size={textField.size}
                    startingPoint={textField.startingPoint}
                    type={textField.type}
                    color={textField.color}
                    fontFamily={textField.fontFamily}
                    fillText={textField.fillText}
                    fillField={textField.fillField}
                    alignment={textField.alignment}
                    bold={textField.bold}
                    italic={textField.italic}
                    underlined={textField.underlined}
                ></TextElement>)
            }
            if (element.type === "picture")
            {
                pictureField = element;
                ElementsArray.push(
                    <PictureElement
                        id={pictureField.id}
                        type={pictureField.type}
                        src={pictureField.src}
                        startingPoint={pictureField.startingPoint}
                        size={pictureField.size}
                    ></PictureElement>
                )
            }
            if (element.type === "circle")
            {
                circleField = element;
                ElementsArray.push(
                    <Circle
                    id={circleField.id}
                    type={circleField.type}
                    radiusX={circleField.radiusX}
                    radiusY={circleField.radiusY}
                    startingPoint={circleField.startingPoint}
                    fillColor={circleField.fillColor}
                    borderColor={circleField.borderColor}
                    borderWidth={circleField.borderWidth}
                    ></Circle>
                )
            }
            if (element.type === "triangle")
            {
                triangleField = element;
                ElementsArray.push(
                    <Triangle
                        id={triangleField.id}
                        pointOne={triangleField.pointOne}
                        pointTwo={triangleField.pointTwo}
                        pointThree={triangleField.pointThree}
                        startingPoint={triangleField.startingPoint}
                        type={triangleField.type}
                        fillColor={triangleField.fillColor}
                        borderColor={triangleField.borderColor}
                        borderWidth={triangleField.borderWidth}
                    ></Triangle>
                )
            }
            if (element.type === "rectangle")
            {
                rectangleField = element;
                ElementsArray.push(
                    <Rectangle
                        id={rectangleField.id}
                        startingPoint={rectangleField.startingPoint}
                        type={rectangleField.type}
                        size={rectangleField.size}
                        fillColor={rectangleField.fillColor}
                        borderColor={rectangleField.borderColor}
                        borderWidth={rectangleField.borderWidth}
                    ></Rectangle>
                )
            }
        }
    }
    const workSlide = ElementsArray.map((element) => 
        element
    )
    return workSlide
}

function WorkSlide(props: Slide) {
    const WorkSlideStyle = {
        background: props.backgroundColor
    }
    const workSlide = Elements(props.elementsList)
    return (
        <div className='WorkSlide' style={WorkSlideStyle} key={props.id}>
            {workSlide}
        </div>
    )
}

function PresentationPreview(props: Presentation) {
    const Slides:Array<Slide> = props.slides;
    const workSlide = Slides.map((slide) => 
        (slide.workSlide === true) ? <WorkSlide
            id={slide.id}
            backgroundColor={slide.backgroundColor}
            workSlide={slide.workSlide}
            elementsList={slide.elementsList}
        ></WorkSlide> : null
    )
    const SlidesList = Slides.map((slide) =>
        <PresentationSlide
            id={slide.id}
            backgroundColor={slide.backgroundColor}
            workSlide={slide.workSlide}
            elementsList={slide.elementsList}
        ></PresentationSlide>
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
    PresentationPreview,
    WorkSlide,
}

export type {Slide}
export type {TextElement}
export type {PictureElement}
export type {Circle}
export type {Triangle}
export type {Rectangle}