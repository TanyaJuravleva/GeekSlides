import React from 'react'
import logo from './images/logo.svg';
import { TitleSlide } from './TitleSlide';

const StartPresentation = {
    name: "My presentation",
    logo: logo,
    slides: [TitleSlide],
    selectedCollection: [{
        selectedSlideId: TitleSlide.id,
        selectedElementsIds: [],
    }],
}

export {StartPresentation}