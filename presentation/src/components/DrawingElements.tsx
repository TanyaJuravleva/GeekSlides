import {Triangle, Circle, Rectangle} from './../types/Figures'
import {TextElement, PictureElement} from './../types/SlideElements'
import {DrawingTextElement} from './DrawingTextElement'
import {DrawingPictureElement} from './DrawingPictureElement'
import {DrawingCircle} from './DrawingCircle'
import {DrawingTriangle} from './DrawingTriangle'
import {DrawingRectangle} from './DrawingRectangle'

function DrawingElements(elementsList: Array<TextElement|PictureElement|Circle|Rectangle|Triangle>)
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

export {DrawingElements}