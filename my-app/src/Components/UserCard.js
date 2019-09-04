import React from 'react';


 const UserCard = props => {
console.log(props.user);
return(
    <div className="the-main-card">
    <h1 className="card-title" >GitHub UserCard</h1>
    <h3 className="name-title" >My Name Is: {props.propsname}</h3>
    <img className="my-img" src={props.propsimg}/>
    <p className="my-location" >I'm From: {props.propslocation}</p>
    <p className="theGit" >I Started My Github:{props.propsCreated}</p>
    <p className="theBio" ><strong>Bio:</strong> {props.propsBio}</p>
    <p className="theF" >Followers: {props.propsfollowers}</p>
    <p className="theF" >Following: {props.propsfollowing}</p>

    </div>
);
}

export default UserCard;