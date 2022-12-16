import React from 'react'
import {Slide} from './Slide'

type Presentation = {
    name: string,
    logo: string,
    slides: Slide[],
    selectedCollection: Array<{
        selectedSlideId: string,
        selectedElementsIds: string[],
    }>,
};

export type {Presentation}