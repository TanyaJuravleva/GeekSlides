import { Circle } from '../types/Figures'

function TitleCircle(idCircle:number)
{
  const titlePicture:Circle = {
    id: idCircle.toString(),
    type: 'circle',
    startingPoint: {x: 200, y: 200},
    fillColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    size: {width: 200, height: 200},
  }
  return titlePicture
}

  export {TitleCircle}