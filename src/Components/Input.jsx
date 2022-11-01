import React, { useState } from "react"
import { useEffect } from "react";

export default function Input(props){
    const[textt, setText] = useState("Help");

    useEffect(() => {
        document.title = `Вы нажали ${textt}`;
    });
    
    return(
        <div>
            <input type="text" placeholder={textt}/>
            <input onClick={() => setText("Hello")} type="submit"/>

    {/* Если значение helpText равно "Help" , то выводится Yes или No */}
            <p>{textt}</p>
        </div>
    )
};