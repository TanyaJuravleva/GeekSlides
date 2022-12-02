import React, { PropsWithChildren } from 'react'
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
        </div>
    )
}

function TextElement(props:TextElement) {
    let Bold
    let Underlined
    let Italic
    if (props.bold)
    {
        Bold = {
            fontWeight: "bold"
        }
    }
    if (props.underlined)
    {
        Underlined = {
            textDecoration: "underline"
        }
    }
    if (props.italic)
    {
        Italic = {
            fontStyle: "italic"
        }
    }
    const WorkTextStyle = Bold && Underlined && Italic && {
        fontSize: props.fontSize,
        color: props.color,
        fontFamily: props.fontFamily,
        background: props.fillField,
        textalign: props.alignment,
        x: props.startingPoint.x,
        y:props.startingPoint.y,
        width: props.size.width,
        height: props.size.height
    }
    const WorkText = {
        background:props.fillText
    }
    return (
        <div id={props.id} style={WorkTextStyle}>
            <p style={WorkText}>{props.text}</p>
            <div>{props.type}</div>
        </div>
    )
}

function WorkSlide(props: Slide) {
    const WorkSlideStyle = {
        background: props.backgroundColor
    }
    let ElementsArray:Array<any> = []
    let textField:TextElement
    if (props.elementsList)
    {
        for (let i = 0; i < props.elementsList.length; i++)
        {
            let element = props.elementsList[i];
            if (element.type == "text")
            {
                textField = element;
                ElementsArray.push(
                <TextElement
                    text={textField.text}
                    fontSize={textField.fontSize}
                    color={textField.color}
                    fontFamily={textField.fontFamily}
                    id={textField.id}
                    size={textField.size}
                    startingPoint={textField.startingPoint}
                    type={textField.type}
                    fillText={textField.fillText}
                    fillField={textField.fillField}
                    alignment={textField.alignment}
                    bold={textField.bold}
                    italic={textField.italic}
                    underlined={textField.underlined}
                ></TextElement>)
            }
            if (props.elementsList[i].type == "picture")
            {
                
            }
            if (props.elementsList[i].type == "circle")
            {
                
            }
        }
    }
    const workSlide = ElementsArray.map((element) => 
        element
    )
    return (
        <div className='WorkSlide' style={WorkSlideStyle} key={props.id}>
            <p>{props.workSlide}</p>
            {workSlide}
        </div>
    )
}

function PresentationPreviw(props: Presentation) {
    const Slides:Array<Slide> = props.slides;
    // const SlidesList = Slides.map((slide) =>
    //     <PresentationSlide
    //         id={slide.id}
    //         backgroundColor={slide.backgroundColor}
    //         workSlide={slide.workSlide}
    //         elementsList={slide.elementsList}
    //     ></PresentationSlide>
    // )
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
                {/* <div className='SlidesList'>
                    {SlidesList}
                </div> */}
                {workSlide}
            </div>
        </div>
    )
}

export {
    PresentationPreviw,
}