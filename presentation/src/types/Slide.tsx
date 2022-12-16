import React from 'react'
import {TextElement, PictureElement} from './SlideElements'
import {Circle, Rectangle, Triangle} from './Figures'
import {Size} from './SizeCoordinates'

type Slide = {
    id: string,
    backgroundColor: string,
    workSlide: boolean,
    size: Size,
    elementsList: Array<TextElement|PictureElement|Circle|Rectangle|Triangle>
};

export type {Slide}