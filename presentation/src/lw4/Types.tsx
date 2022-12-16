import React, { useState } from 'react'
import styles from './Types.module.css'
import image from './../image.svg'
import figure from './../figure.png'
import text from './../text.svg'

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
    size: Size,
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
    size: Size,
}

type Circle = BaseFigureElement & {
    type: 'circle',
};

type Triangle = BaseFigureElement & {
    type: 'triangle',
    // pointOne: Coordinates,
    // pointTwo: Coordinates,
    // pointThree: Coordinates,
}

type Rectangle = BaseFigureElement & {
    type: 'rectangle',
};

function PresentationSlideList(props: Slide) {
    const SlideStyle = {
        background: props.backgroundColor,
        width: props.size.width,
        height: props.size.height
    }
    const workSlide = Elements(props.elementsList)
    return (
        <div className={styles.slide} style={SlideStyle} key={props.id}>
            {workSlide}
        </div>
    )
}

function DrawingTextElement(props:TextElement) {
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
        width: props.size.width,
        height: props.size.height,
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
        <div id={props.id} style={WorkTextStyle} className={styles.element}>
            <p style={WorkText}>{props.text}</p>
        </div>
    )
}

function DrawingPictureElement(props:PictureElement) {
    const PictureStyle = {
        width: props.size.width,
        height: props.size.height
    }
    const Picture = {
        left: props.startingPoint.x,
        top: props.startingPoint.y
    }
    return (
        <div id={props.id} className={styles.element} style={Picture}>
           <img src={props.src} style={PictureStyle}></img>
        </div>
    )
}

function DrawingCircle(props:Circle) {
    const CircleStyle = {
        left: props.startingPoint.x,
        top: props.startingPoint.y,
        width: props.size.width + 2*props.borderWidth,
        height: props.size.height + 2*props.borderWidth
    }
    return (
        <svg className={styles.element} style={CircleStyle}>
            <ellipse rx={props.size.width/2 + props.borderWidth/2} ry={props.size.height/2 + props.borderWidth/2} cx={props.size.width/2 + props.borderWidth} cy={props.size.height/2 + props.borderWidth}
                    stroke={props.borderColor}
                    fill={props.fillColor}
                    strokeWidth={props.borderWidth}
            ></ellipse>
        </svg>
    )
}

function DrawingTriangle(props:Triangle) {
    const TriangleStyle = {
        left: props.startingPoint.x,
        top: props.startingPoint.y,
        width: props.size.width + 2*props.borderWidth,
        height: props.size.height + 2*props.borderWidth
    }
    // const x1:string = String(props.pointOne.x)
    // const y1:string = String(props.pointOne.y)
    // const x2:string = String(props.pointTwo.x)
    // const y2:string = String(props.pointTwo.y)
    // const x3:string = String(props.pointThree.x)
    // const y3:string = String(props.pointThree.y)
    const x1:string = String(props.size.width/2 + props.borderWidth)
    const y1:string = String(props.borderWidth)
    const x2:string = String(props.borderWidth + props.size.height)
    const y2:string = String(props.size.height + props.borderWidth)
    const x3:string = String(props.size.width + props.borderWidth - props.size.height)
    const y3:string = String(props.size.height + props.borderWidth)
    const Points:string = `${x1},${y1} ${x2},${y2} ${x3},${y3}`;
    return (
        <svg className={styles.element} style={TriangleStyle}>
            <polygon points={Points}                     
                    stroke={props.borderColor}
                    fill={props.fillColor}
                    strokeWidth={props.borderWidth}/>
        </svg>
    )
}

function DrawingRectangle(props:Rectangle) {
    const RectangleStyle = {
        left: props.startingPoint.x,
        top: props.startingPoint.y,
        width: props.size.width + 2*props.borderWidth,
        height: props.size.height + 2*props.borderWidth,
    }
    return (
        <svg className={styles.element} style={RectangleStyle}>
            <rect
                width={props.size.width}
                height={props.size.height}
                x={props.borderWidth/2}
                y={props.borderWidth/2}
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
                <DrawingTextElement
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
                ></DrawingTextElement>)
            }
            if (element.type === "picture")
            {
                ElementsArray.push(
                    <DrawingPictureElement
                        id={element.id}
                        type={element.type}
                        src={element.src}
                        startingPoint={element.startingPoint}
                        size={element.size}
                    ></DrawingPictureElement>
                )
            }
            if (element.type === "circle")
            {
                ElementsArray.push(
                    <DrawingCircle
                    id={element.id}
                    type={element.type}
                    size={element.size}
                    startingPoint={element.startingPoint}
                    fillColor={element.fillColor}
                    borderColor={element.borderColor}
                    borderWidth={element.borderWidth}
                    ></DrawingCircle>
                )
            }
            if (element.type === "triangle")
            {
                ElementsArray.push(
                    <DrawingTriangle
                        id={element.id}
                        // pointOne={element.pointOne}
                        // pointTwo={element.pointTwo}
                        // pointThree={element.pointThree}
                        size={element.size}
                        startingPoint={element.startingPoint}
                        type={element.type}
                        fillColor={element.fillColor}
                        borderColor={element.borderColor}
                        borderWidth={element.borderWidth}
                    ></DrawingTriangle>
                )
            }
            if (element.type === "rectangle")
            {
                ElementsArray.push(
                    <DrawingRectangle
                        id={element.id}
                        startingPoint={element.startingPoint}
                        type={element.type}
                        size={element.size}
                        fillColor={element.fillColor}
                        borderColor={element.borderColor}
                        borderWidth={element.borderWidth}
                    ></DrawingRectangle>
                )
            }
        }
    }
    return ElementsArray
}

function WorkSlide(props: Slide) {
    const WorkSlideStyle = {
        background: props.backgroundColor,
        width: props.size.width,
        height: props.size.height
    }
    return (
        <div className={styles.workslide} style={WorkSlideStyle} key={props.id}>
            {Elements(props.elementsList)}
        </div>
    )
}

function PresentationPreview(props: Presentation) {
    const Slides:Array<Slide> = props.slides;
    const workSlideData = Slides.find(slide => slide.workSlide) as Slide
    const workSlide = <WorkSlide
        id={workSlideData.id}
        backgroundColor={workSlideData.backgroundColor}
        workSlide={workSlideData.workSlide}
        elementsList={workSlideData.elementsList}
        size={workSlideData.size}
    />
    const SlidesList = Slides.map((slide) =>
        <PresentationSlideList
            id={slide.id}
            backgroundColor={slide.backgroundColor}
            workSlide={slide.workSlide}
            elementsList={slide.elementsList}
            size={slide.size}
        ></PresentationSlideList>
    )
    return (
        <div>
            <div className={styles.header}>
                <img className={styles.logo} src={props.logo}></img>
                <div>
                    <p className={styles.name}>{props.name}</p>
                    <div className={styles.menu}>
                        <p>Файл</p>
                        <p>Вид</p>
                        <p>Правка</p>
                        <p>Слайд</p>
                        <p>Объект</p>
                        <p>Вставка</p>
                    </div>
                </div>
            </div>
            <div className={styles.toolbar}>
                <img className={styles.toolelement} src={image}></img>
                <img className={styles.toolelement} src={text}></img>
                <img className={styles.toolelement} src={figure}></img>
            </div>
            <div className={styles.area}>
                <div className={styles.border}>
                    <div className={styles.list}>
                        {SlidesList}
                    </div>
                </div>
                <div className={styles.work}>
                    {workSlide}
                </div>
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
export type {Size}