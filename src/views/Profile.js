import React, { Component } from "react";

//general plan for this:
// find an overwatch api that i like
//use the server to make axios calls, mostly for practice, maybe adding sessions and shit
//learn d3 to display graphs of user stats
//tryout rxjs for events (watch more of the netflix youtube talks)
//user redux for all state

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>profile idk</h1>
        <input placeholder="Input battletag..." />
        <button>Go</button>
      </div>
    );
  }
}

export default Profile;
