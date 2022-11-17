import React from 'react'

type Presentation = {
    name: string
};

function Presen(props: Presentation) {
    return (
        <div>{props.name}</div>
    )
}

export {
    Presen,
}