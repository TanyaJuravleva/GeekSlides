import { Triangle } from '../types/Figures'

function TitleTriangle(idTriangle:number)
{
  const titleTriangle:Triangle = {
    id: idTriangle.toString(),
    type: 'triangle',
    startingPoint: {x: 200, y: 200},
    fillColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    size: {width: 200, height: 200},
  }
  return titleTriangle
}

  export {TitleTriangle}