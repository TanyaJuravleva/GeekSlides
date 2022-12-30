import React from "react"
import { Coordinates } from "../types/SizeCoordinates"
import { useEffect } from "react"
import { PictureElement } from "../types/SlideElements";

function UseDragAndDrops(element:PictureElement, setPos: React.Dispatch<React.SetStateAction<Coordinates>>)
{
    useEffect(() => {
        let startPos:Coordinates
        onmousedown = (e) => {
            startPos = {x: e.pageX, y: e.pageY}
        }
        onmousemove = (e) => {
            const delta = {x: e.pageX - startPos.x, y: e.pageY - startPos.y}
            const newPos = {x: element.startingPoint.x + delta.x, y: element.startingPoint.y + delta.y}
            setPos(newPos)
        }       
        onmouseup = (e) => {

        }
    });
}
export {UseDragAndDrops}