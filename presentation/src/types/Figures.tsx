import React from 'react'
import {Size, Coordinates} from './SizeCoordinates'

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

export type {Circle}
export type {Triangle}
export type {Rectangle}