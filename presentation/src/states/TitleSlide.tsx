import { generateKey } from 'crypto'
import React, { useState } from 'react'
import { Slide } from '../types/Slide'

function TitleSlide(id: number)
{
    let titleSlide:Slide = {
        id: id.toString(),
        backgroundColor: 'white',
        workSlide: true,
        elementsList: [],
    }
    return titleSlide
}

export {TitleSlide}