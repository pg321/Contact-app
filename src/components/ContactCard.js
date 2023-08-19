import React from "react";
import user from "../images/user.png";
const ContactCard = (props) => {
        const {id,name,email} = props.contact;
    return(
        <div className="item">
                    <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <i 
                className="trash alternate online icon right floated"
                style={{ color:"red" , marginTop:"9px" }}
                onClick={() => props.clickHandler(id)}
                />
            </div>
    );

}

export default ContactCard;