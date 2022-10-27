import { Component } from "react";

export default class Description extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            visibility: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }

    render(){
        if (this.state.visibility){
            return(
                <div>
                    <p>{this.props.title}</p>
                    <div className="col">
                        <button onClick={this.handleClick}>Close</button>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="col">
                    <button onClick={this.handleClick}>Open info</button>
                </div>
            );
        }
    }
    
}