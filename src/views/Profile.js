import React, { Component } from "react";

import { connect } from "react-redux";
import { changeBTInput, setBattleTag } from "../ducks/reducer";

//general plan for this:
// find an overwatch api that i like
//use the server to make axios calls, mostly for practice, maybe adding sessions and shit
//learn d3 to display graphs of user stats
//tryout rxjs for events (watch more of the netflix youtube talks)
//use redux for all state

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>profile idk</h1>
        <input
          placeholder="Input battletag..."
          onChange={(e) => this.props.changeBTInput(e.target.value)}
        />
        <button onClick={this.props.setBattleTag}>Go</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => state; //change this to be less broad later

export default connect(
  mapStateToProps,
  { setBattleTag, changeBTInput }
)(Profile);
