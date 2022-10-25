import React from "react";

class Image extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="" width={300}/>
            </div>
        )
    }
}

export default Image;