import React from 'react';


const UserList = (props) => {
console.log(props.followersList);
    return(
       
        <div> 
            {props.followersList.map(thefollowers => 
                <div className="follower-card" >
                    <p className="followerName" >{thefollowers.login}</p>
                    <img className="followerPic" src={thefollowers.avatar_url}  alt={thefollowers.name}/>
                </div>
           
                )}
        </div>
    );

}
export default UserList;

