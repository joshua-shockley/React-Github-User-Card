import React from 'react';


 const UserCard = props => {
console.log(props.user);
return(
    <div className="the-main-card">
    <h1 className="card-title" >GitHub UserCard</h1>
    <h3 className="name-title" >My Name Is: {props.propsname}</h3>
    <img className="" src={props.propsimg}/>
    <h4>I'm From: {props.propslocation}</h4>
    <h3>I Started My Github:{props.propsCreated}</h3>
    <p><strong>Bio:</strong> {props.propsBio}</p>
    <p>Followers: {props.propsfollowers}</p>
    <p>Following: {props.propsfollowing}</p>

    </div>
);
}

export default UserCard;