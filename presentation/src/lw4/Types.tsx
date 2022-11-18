import React from 'react'
import './Types.css';

type Presentation = {
    name: string,
    logo: string,
    slides: Slide[],
};

type Slide = {
    id: string,
    backgroundColor: string,
    workSlide: boolean,
};

function PresentationSlide(props: Slide) {
    const SlideStyle = {
        background: props.backgroundColor
    }
    return (
        <div className='Slide' style={SlideStyle} key={props.id}>
            <p>{props.workSlide}</p>
        </div>
    )
}

function WorkSlide(props: Slide) {
    const WorkSlideStyle = {
        background: props.backgroundColor
    }
    return (
        <div className='WorkSlide' style={WorkSlideStyle} key={props.id}>
            <p>{props.workSlide}</p>
        </div>
    )
}

function PresentationPreviw(props: Presentation) {
    const Slides:Array<Slide> = props.slides;
    const SlidesList = Slides.map((slide) =>
        <PresentationSlide
            id={slide.id}
            backgroundColor={slide.backgroundColor}
            workSlide={slide.workSlide}
        ></PresentationSlide>
    )
    const workSlide = Slides.map((slide) => 
        (slide.workSlide === true) ? <WorkSlide
            id={slide.id}
            backgroundColor={slide.backgroundColor}
            workSlide={slide.workSlide}
        ></WorkSlide> : null
    )
    return (
        <div>
            <div className="Preview">
                <img className='PreviewLogo' src={props.logo}></img>
                <p className='PreviewHeader'>{props.name}</p>
            </div>
            <div className='WorkArea'>
                <div className='SlidesList'>
                    {SlidesList}
                </div>
                {workSlide}
            </div>
        </div>
    )
}

export {
    PresentationPreviw,
}