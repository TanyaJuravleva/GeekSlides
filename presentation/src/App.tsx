import React from 'react';
import {PresentationPreview} from './components/PresentationPreview'
import {TextElement, PictureElement} from './types/SlideElements'
import {Circle, Rectangle, Triangle} from './types/Figures'
import {Slide} from './types/Slide'
import logo from './images/logo.svg';
import cat from './images/slides/cat.jpg'
import { StartPresentation } from './states/StartPresentation';

const textField:TextElement = {
  id: 'text1',
  type: 'text',
  startingPoint: {x: 400, y: 50},
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
  size: {width: 600, height: 400}
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

const elements = [textField, pictureField, circle, rectangle, triangle, ]

const slide1:Slide = {id: '2', backgroundColor:'blue', workSlide: true, elementsList: elements}
const slide2:Slide = {id: '1', backgroundColor:'red', workSlide: false, elementsList: []}
const slide3:Slide = {id: '3', backgroundColor:'green', workSlide: false, elementsList: []}

const slidesList = [
  slide1, slide2, slide3, slide3, slide3
];

const CollectionSlides = [
  {selectedSlideId: '2', selectedElementsIds: ['1', '2', '3']}
]

function App() {
  return (
    <PresentationPreview
      name={StartPresentation.name}
      logo={StartPresentation.logo}
      slides={StartPresentation.slides}
      selectedCollection={StartPresentation.selectedCollection}
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
