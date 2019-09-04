import React from 'react';


const UserList = (props) => {
console.log(props.followersList);
    return(
       
        <div> 
           <h3>My Followers</h3>
            <div className="follower-listOfCards">
            {props.followersList.map(thefollowers => 
                <div className="follower-card" >
                    <p className="followerName" >{thefollowers.login}</p>
                    <a href={thefollowers.html_url} target="_blank"><img className="followerPic" src={thefollowers.avatar_url}  alt={thefollowers.name}/></a>
                </div>
                )}
               </div> 
        </div>
    );

}
export default UserList;

