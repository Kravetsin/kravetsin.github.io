import React from "react";
import Description from "./Description";

class Profile extends React.Component{
    render(){
        return(
            <div><br />
                <div>
                    <h2>{this.props.profileName}</h2>
                </div>
                <div>
                    <a href={this.props.profileLink} target="blank"><img src={this.props.image} alt="" width={200}/></a>
                </div>
                <div>
                    <Description title={this.props.title}/>
                </div>
                <hr />
            </div>
        )
    }
}
Description.defaultProps = {
    title: "Информация недоступна."
  }

export default Profile;