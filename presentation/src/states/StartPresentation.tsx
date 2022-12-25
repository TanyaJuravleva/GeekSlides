import React from 'react'
import { Presentation } from '../types/Presentation';
import logo from './../images/logo.svg';
import { titleSlide } from './TitleSlide';

const StartPresentation:Presentation = {
    name: "My presentation",
    logo: logo,
    slides: [titleSlide],
    selectedCollection: [{
        selectedSlideId: titleSlide.id,
        selectedElementsIds: [],
    }],
}

export {StartPresentation}