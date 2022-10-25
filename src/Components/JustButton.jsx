import React, { useState } from "react"

const JustButton = (props) => {
    const click = useState(0)
    console.log(click)

    return(
        <div className="col">
            <button>{props.text}</button>
        </div>
    )
}

JustButton.defaultProps = {
    text: 'Knopka'
}

export default JustButton;