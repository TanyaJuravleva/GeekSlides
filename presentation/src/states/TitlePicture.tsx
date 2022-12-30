import { PictureElement } from "../types/SlideElements"
import cat from './../images/slides/cat.jpg'

function TitlePicture(idPicture:number)
{
  const titlePicture:PictureElement = {
    id: idPicture.toString(),
    type: 'picture',
    src: cat,
    startingPoint: {x: 400, y: 300},
    size: {width: 300, height: 300},
    border: 'dashed',
    borderColor: 'grey',
    borderWidth: 2,
  }
  return titlePicture
}

  export {TitlePicture}