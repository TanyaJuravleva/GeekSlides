import { Rectangle } from '../types/Figures'

function TitleRectangle(idRectangle:number)
{
  const titleRectangle:Rectangle = {
    id: idRectangle.toString(),
    type: 'rectangle',
    startingPoint: {x: 200, y: 200},
    fillColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    size: {width: 200, height: 200},
  }
  return titleRectangle
}

  export {TitleRectangle}