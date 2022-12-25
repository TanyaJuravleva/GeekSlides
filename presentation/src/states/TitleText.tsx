import { TextElement } from "../types/SlideElements"

const titleText:TextElement = {
    id: 'text1',
    type: 'text',
    startingPoint: {x: 400, y: 50},
    size: {width: 290, height: 150},
    text: 'Заголовок',
    fontSize: 36,
    color: 'black',
    fontFamily: 'Arial',
    fillText: '', // заливка фона текста
    fillField: '', // заливка текстового поля
    alignment: "center", // выравнивание (по левому краю, по правому краю, по центру) 
    bold: false, 
    italic: false,
    underlined: false,
  }

  export {titleText}