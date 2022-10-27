import React from "react"

const JustButton = (props) => {
    return(
        <div className="col">
            <a href={props.title} target="blank"><button>{props.text}</button></a>
        </div>
    )
}

JustButton.defaultProps = {
    text: 'Knopka'
}

export default JustButton;