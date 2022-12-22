import image from './../images/toolbar/image.svg'
import text from './../images/toolbar/text.svg'
import figure from './../images/toolbar/figure.png'
import undo from './../images/toolbar/undo.png'
import redo from './../images/toolbar/redo.png'
import plus from './../images/toolbar/plus.png'
import styles from './../css/Types.module.css'
import { addSlide } from '../actionsCreators/AddSlide';
import { TitleSlide } from '../states/TitleSlide';
import { Presentation } from '../types/Presentation';
import { StartPresentation } from '../states/StartPresentation';

const Toolbar = () => {
  return (
    <div>
        <div className={styles.toolbar}>
            <button type='button' className={styles.toolbutton}><img className={styles.toolelement} src={plus}></img></button>
            <button type='button' className={styles.toolbutton}><img className={styles.toolelement} src={undo}></img></button>
            <button type='button'className={styles.toolbutton}><img className={styles.toolelement} src={redo}></img></button>
        
            <button type='button'className={styles.toolbutton}><img className={styles.toolelement} src={image}></img></button>
            <button type='button'className={styles.toolbutton}><img className={styles.toolelement} src={text}></img></button>
            <button type='button'className={styles.toolbutton}><img className={styles.toolelement} src={figure}></img></button>
        </div>
    </div>
  );
};

export {Toolbar};