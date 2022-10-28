import React from "react";
import Image from "../img/pngegg.png"

export default function ScrollToTop(){
    
    return(
        <div>
            <a href="#header"><img className="upward" src={Image} alt="" /></a>
        </div>
    )
}
window.addEventListener('scroll', function(){ 
    let scroll = document.querySelector('.upward'); 
    scroll.classList.toggle('active', window.scrollY>500); 
    })

    
