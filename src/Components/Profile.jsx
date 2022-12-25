import React from "react";
import Description from "./Description";

class Profile extends React.Component{
    render(){
        return(
            <div className="center"><br />
                <div>
                    <h2>{this.props.profileName}</h2>
                </div>
                <div>
                    <a href={this.props.profileLink} target="blank"><img className="profile" src={this.props.image} alt="" width={300}/></a>
                </div>
                <div>
                    <Description title={this.props.title}/>
                </div>
            </div>
        )
    }
}
Description.defaultProps = {
    title: "Информация недоступна."
}

export default Profile;