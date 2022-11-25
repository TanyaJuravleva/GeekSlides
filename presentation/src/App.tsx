import React from 'react';
import {PresentationPreviw} from "./lw4/Types"
import logo from './logo.svg';
import { serialize } from 'v8';

const textField = {
  id: 'text1',
  type: 'text',
  startingPoint: {x: 2, y: 50},
  size: {width: 200, height: 300},
  text: 'Заголовок',
  fontSize: 14,
  color: 'green',
  fontFamily: 'Roboto',
  fillText: 'red', // заливка фона текста
  fillField: 'yellow', // заливка текстового поля
  alignment: 'center', // выравнивание (по левому краю, по правому краю, по центру) 
  bold: true, 
  italic: true,
  underlined: true,
}

const pictureField = {
  id: 'picture1',
  type: 'picture',
  src: 'img/cat.png',
  startingPoint: {x: 30, y: 50},
  size: {width: 300, height: 400},
}

const Circle = {
  id: 'circle1',
  size: {width: 30, height: 40},
  startingPoint: {x: 4, y: 60},
  fillColor: 'pink',
  borderWidth: 20,
  borderColor: 'grey',
  type: 'circle',
  radiusX: 30,
  radiusY: 40,
}

const Triangle = {
  id: 'triangle1',
  size: {width: 30, height: 40},
  startingPoint: {x: 40, y: 59},
  fillColor: 'purple',
  borderWidth: 30,
  borderColor: 'red',
  type: 'triangle',
  pointOne: {x: 40, y: 59},
  pointTwo: {x: 40, y: 59},
  pointThree: {x: 40, y: 59},
}

const Rectangle = {
  id: 'rectangle1',
  size: {width: 30, height: 40},
  startingPoint: {x: 40, y: 59},
  fillColor: 'blue',
  borderWidth: 40,
  borderColor: 'green',
  type: 'rectangle',
}

const slidesList = [
  {id: '1', backgroundColor:'red', workSlide: false, elementList: []},
  {id: '2', backgroundColor:'blue', workSlide: true, elementList: [pictureField, textField, Circle, Triangle, Rectangle]},
  {id: '3', backgroundColor:'green', workSlide: false, elementList: []},
];

function App() {
  return (
    <PresentationPreviw
      name='My Presentation'
      logo={logo}
      slides={slidesList}
    ></PresentationPreviw>
  );
}

export default App;
