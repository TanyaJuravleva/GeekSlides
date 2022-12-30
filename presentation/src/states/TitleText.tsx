import { TextElement } from "../types/SlideElements"

function TitleText(idText:number)
{
  const titleText:TextElement = {
    id: idText.toString(),
    type: 'text',
    startingPoint: {x: 400, y: 100},
    size: {width: 290, height: 150},
    border: 'dashed',
    borderColor: 'grey',
    borderWidth: 2,
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
  return titleText
}

  export {TitleText}