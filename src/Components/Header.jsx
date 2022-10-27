import React from "react";

class Header extends React.Component {
    render(){
        return(
            <div>
                <header className="header">{this.props.title}</header>               
            </div>
        ) 
    }
}

export default Header;