import React from 'react';


const UserList = (props) => {
console.log(props.followers);
    return(
        // console.log(this.props);

        <div>
            <p>does this show up? on list-> {props.propsname}</p>
            <p>{}</p>
        </div>
    );

}
export default UserList;

