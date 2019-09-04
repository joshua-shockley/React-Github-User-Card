import React from 'react';

import UserList from './Components/UserList.js';
import UserCard from './Components/UserCard.js';

import './App.css';
import { ReactDOM } from 'react-dom';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      followers: []      
    };
    
  }
componentDidMount(){
  fetch(`https://api.github.com/users/joshua-shockley`)
  .then(res=> res.json())
  //  .then(res => console.log(res))
   .then(res => this.setState({user:res}))
  .catch(err => console.log('aaaaah!'));
  
  fetch(`https://api.github.com/users/joshua-shockley/followers`)
  .then(res => res.json())
  .then(res=> this.setState({followers: res}))
  .catch(err=> console.log('CRAP!!'));

}


  render(){
console.log(this.state.user);
console.log(this.state.followers);

  return (
    <div className="App">
        <UserCard 
          propsname={this.state.user.name}
          propsimg={this.state.user.avatar_url}
          propsfollowers={this.state.user.name}
          propsfollowing={this.state.user.following}
          propslocation={this.state.user.location}
          propsBio={this.state.user.bio}
          propsCreated={this.state.user.created_at}
        />
       <UserList 
       followersList={this.state.followers}
        />

    </div>
  );
  }
}

export default App;
