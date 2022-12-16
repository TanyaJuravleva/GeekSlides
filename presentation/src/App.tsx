import React from 'react';
import {PresentationPreview, Slide} from "./lw4/Types"
import {PictureElement} from "./lw4/Types"
import {TextElement} from "./lw4/Types"
import {Circle} from "./lw4/Types"
import {Rectangle} from "./lw4/Types"
import {Triangle} from "./lw4/Types"
import logo from './logo.svg';
import cat from './cat.jpg'
import { serialize } from 'v8';

const textField:TextElement = {
  id: 'text1',
  type: 'text',
  startingPoint: {x: 300, y: 50},
  size: {width: 290, height: 150},
  text: '1Заголовок',
  fontSize: 36,
  color: 'green',
  fontFamily: 'Arial',
  fillText: 'pink', // заливка фона текста
  fillField: 'orange', // заливка текстового поля
  alignment: "center", // выравнивание (по левому краю, по правому краю, по центру) 
  bold: true, 
  italic: false,
  underlined: false,
}

const pictureField:PictureElement = {
  id: 'picture1',
  type: 'picture',
  src: cat,
  startingPoint: {x: 100, y: 50},
  size: {width: 400, height: 400},
}

const circle:Circle = {
  id: 'circle1',
  startingPoint: {x: 0, y: 0},
  fillColor: 'red',
  borderWidth: 20,
  borderColor: 'grey',
  type: 'circle',
  size: {width: 60, height:60}
}

const triangle:Triangle = {
  id: 'triangle1',
  startingPoint: {x: 40, y: 150},
  fillColor: 'purple',
  borderWidth: 30,
  borderColor: 'red',
  type: 'triangle',
  size: {width: 400, height: 135}
  // pointOne: {x: 5, y: 135},
  // pointTwo: {x: 115, y: 5},
  // pointThree: {x: 225, y: 135},
}

const rectangle:Rectangle = {
  id: 'rectangle1',
  size: {width: 200, height: 400},
  startingPoint: {x: 200, y: 0},
  fillColor: 'pink',
  borderWidth:20,
  borderColor: 'green',
  type: 'rectangle',
}

const elements = [textField, pictureField, circle, triangle, rectangle]

const slide1:Slide = {id: '2', backgroundColor:'blue', workSlide: true, elementsList: elements, size: {width: 1080, height: 600}}
const slide2:Slide = {id: '1', backgroundColor:'red', workSlide: false, elementsList: [], size: {width: 1080, height: 600}}
const slide3:Slide = {id: '3', backgroundColor:'green', workSlide: false, elementsList: [], size: {width: 1080, height: 600}}

const slidesList = [
  slide1, slide2, slide3, slide3, slide3
];

const CollectionSlides = [
  {selectedSlideId: '2', selectedElementsIds: ['1', '2', '3']}
]

function App() {
  return (
    <PresentationPreview
      name='My Presentation'
      logo={logo}
      slides={slidesList}
      selectedCollection={CollectionSlides}
    ></PresentationPreview>
  );
}

export default App;


{/* <WorkSlide
id='1'
backgroundColor='green'
workSlide={true}
elementsList={elements}
></WorkSlide> */}
