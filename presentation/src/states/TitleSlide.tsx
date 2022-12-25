import { generateKey } from 'crypto'
import React from 'react'
import { Slide } from '../types/Slide'

const titleSlide:Slide = {
    id: Math.random().toString(),
    backgroundColor: 'white',
    workSlide: true,
    elementsList: [],
}

export {titleSlide}