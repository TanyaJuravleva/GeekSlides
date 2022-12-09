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
    size: Size,
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
    const WorkTextStyle = {
        background: props.fillField,
        left: props.startingPoint.x,
        top: props.startingPoint.y,
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
        <div id={props.id} style={WorkTextStyle} className="Element">
            <p style={WorkText}>{props.text}</p>
        </div>
    )
}

function PictureElement(props:PictureElement) {
    const PictureStyle = {
        width: props.size.width + '%',
        height: props.size.height + '%'
    }
    const Picture = {
        left: props.startingPoint.x,
        top: props.startingPoint.y
    }
    return (
        <div id={props.id} className="Element" style={Picture}>
           <img src={props.src} style={PictureStyle}></img>
        </div>
    )
}

function Circle(props:Circle) {
    const CircleStyle = {
        left: props.startingPoint.x,
        top: props.startingPoint.y,
        width: props.size.width,
        height: props.size.height
    }
    const CircleSvg = {
        width: props.size.width,
        height: props.size.height
    }
    return (
        <div className="Element" style={CircleStyle}>
            <svg>
                <ellipse rx={props.size.width/2} ry={props.size.height/2} cx={props.startingPoint.x/2} cy={props.startingPoint.y/2}
                        stroke={props.borderColor}
                        fill={props.fillColor}
                        strokeWidth={props.borderWidth}
                ></ellipse>
            </svg>
        </div>
    )
}

function Triangle(props:Triangle) {
    const x1:string = String(props.pointOne.x)
    const y1:string = String(props.pointOne.y)
    const x2:string = String(props.pointTwo.x)
    const y2:string = String(props.pointTwo.y)
    const x3:string = String(props.pointThree.x)
    const y3:string = String(props.pointThree.y)
    const Points:string = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
    return (
        <div>
            <svg className="Element">
                <polygon points={Points}/>
            </svg>
        </div>
    )
}

function Rectangle(props:Rectangle) {
    return (
        <svg className="Element">
            <rect
                width={props.size.width}
                height={props.size.height}
                x={props.startingPoint.x}
                y={props.startingPoint.y}
                stroke={props.borderColor}
                fill={props.fillColor}
                strokeWidth={props.borderWidth}
            ></rect>
        </svg>
    )
}

function Elements(elementsList: Array<TextElement|PictureElement|Circle|Rectangle|Triangle>)
{
    let ElementsArray:Array<JSX.Element> = []
    if (elementsList)
    {
        for (let i = 0; i < elementsList.length; i++)
        {
            let element = elementsList[i];
            if (element.type === "text")
            {
                ElementsArray.push(
                <TextElement
                    text={element.text}
                    fontSize={element.fontSize}
                    id={element.id}
                    size={element.size}
                    startingPoint={element.startingPoint}
                    type={element.type}
                    color={element.color}
                    fontFamily={element.fontFamily}
                    fillText={element.fillText}
                    fillField={element.fillField}
                    alignment={element.alignment}
                    bold={element.bold}
                    italic={element.italic}
                    underlined={element.underlined}
                ></TextElement>)
            }
            if (element.type === "picture")
            {
                ElementsArray.push(
                    <PictureElement
                        id={element.id}
                        type={element.type}
                        src={element.src}
                        startingPoint={element.startingPoint}
                        size={element.size}
                    ></PictureElement>
                )
            }
            if (element.type === "circle")
            {
                ElementsArray.push(
                    <Circle
                    id={element.id}
                    type={element.type}
                    size={element.size}
                    startingPoint={element.startingPoint}
                    fillColor={element.fillColor}
                    borderColor={element.borderColor}
                    borderWidth={element.borderWidth}
                    ></Circle>
                )
            }
            if (element.type === "triangle")
            {
                ElementsArray.push(
                    <Triangle
                        id={element.id}
                        pointOne={element.pointOne}
                        pointTwo={element.pointTwo}
                        pointThree={element.pointThree}
                        startingPoint={element.startingPoint}
                        type={element.type}
                        fillColor={element.fillColor}
                        borderColor={element.borderColor}
                        borderWidth={element.borderWidth}
                    ></Triangle>
                )
            }
            if (element.type === "rectangle")
            {
                ElementsArray.push(
                    <Rectangle
                        id={element.id}
                        startingPoint={element.startingPoint}
                        type={element.type}
                        size={element.size}
                        fillColor={element.fillColor}
                        borderColor={element.borderColor}
                        borderWidth={element.borderWidth}
                    ></Rectangle>
                )
            }
        }
    }
    return ElementsArray
}

function WorkSlide(props: Slide) {
    const WorkSlideStyle = {
        background: props.backgroundColor
    }
    return (
        <div className='WorkSlide' style={WorkSlideStyle} key={props.id}>
            {Elements(props.elementsList)}
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