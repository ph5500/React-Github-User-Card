import React from 'react';
import Card from './components/users/user-card';
import axios from 'axios';

import './App.css';
import FollowerList from './components/followers/follower-list';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      followers: [],
      userText: 'PhilFives',
      organizations: {}
    };
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/ph5500`)
      .then(response => {
        console.log(response);

        this.setState({ users: response.data })
        console.log("User data", response)
      })
      .catch(error => {
        console.log("The data was not returned", error)
      })
  }

  fetchFollowers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(response => {
        console.log("Follower data", response)
        this.setState({ followers: response.data, userText: '' })
      })
      .catch(error => {
        console.log("The data was not returned", error)
      })
  }

  // fetchOrganizations = e => {
  //   e.preventDefault();
  //   axios
  //     .get(`https://api.github.com/users/${this.state.userText}/orgs`)
  //     .then(response => {
  //       console.log("orgz data", response)
  //       this.setState({ organizations: response.data, userText: '' })
  //     })
  //     .catch(error => {
  //       console.log("The data was not returned", error)
  //     })
  // }

  handleChanges = e => {
    this.setState({ userText: e.target.value })
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state.users !== prevState.users) {
      axios
        .get(`https://api.github.com/users/${this.state.userText}`)
        .then(response => {
          console.log("New user data", response)
          this.setState({ users: response.data })
        })
        .catch(error => {
          console.log("The data was not returned", error)
        })
    }
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <input
          type='text'
          value={this.state.userText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchFollowers}>Display Followers</button>
        <Card users={this.state.users} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;