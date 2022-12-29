import {TextElement} from './../types/SlideElements'
import styles from './../css/Types.module.css'

function DrawingTextElement(props:TextElement) {
    let Bold = "unset"
    let Underlined = "none"
    let Italic = "unset"
    if (props.bold)
    {
        Bold = "bold"
    }
    if (props.underlined)
    {
        Underlined = "underline"
    }
    if (props.italic)
    {
        Italic =  "italic"
    }
    const WorkTextStyle = {
        background: props.fillField,
        left: props.startingPoint.x,
        top: props.startingPoint.y,
        width: props.size.width,
        height: props.size.height,
    }
    const WorkText = {
        background:props.fillText,
        color: props.color,
        fontSize: props.fontSize,
        fontFamily: props.fontFamily,
        fontWeight: Bold,
        fontStyle: Italic,
        textDecoration: Underlined,
    }
    return (
        <div id={props.id} style={WorkTextStyle} className={styles.element} key={props.id}>
            <p style={WorkText} key={props.id}>{props.text}</p>
        </div>
    )
}

export {DrawingTextElement}