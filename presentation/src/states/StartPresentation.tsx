import React from 'react'
import { Presentation } from '../types/Presentation';
import logo from './../images/logo.svg';
import { TitleSlide } from './TitleSlide';
import { useState } from 'react';

// let [id, ChangeId] = useState(0);
// ChangeId(id + 1)

function StartPresentation(idSlide:number)
{
    const startPresentation:Presentation = {
        name: "My presentation",
        id: idSlide.toString(),
        logo: logo,
        slides: [TitleSlide(idSlide)],
        selectedCollection: [{
            selectedSlideId: TitleSlide(idSlide).id,
            selectedElementsIds: [],
        }],
    }
    return startPresentation
}

export {StartPresentation}