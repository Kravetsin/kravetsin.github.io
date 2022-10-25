import React from "react";
import Icon from "../img/Ico.png"

class Header extends React.Component {
    render(){
        return(
            <div>
                <img className="icon" src={Icon} alt="" width={95} />
                <header className="header">{this.props.title}</header>
                
            </div>
        ) 
    }

    inputClick(){console.log("Clicked")}
    mouseClick(){console.log('Mouse over')}
}

export default Header;