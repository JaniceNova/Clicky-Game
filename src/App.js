import React, { Component } from "react";
import PicCard from "./components/PicCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import charaters from "./charaters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    charaters: charaters
  };

  pushCharater = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const charaters = this.state.charaters.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ charaters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!<br />
Click on an image to earn points, but don't click on any more than once!</Title>
        {this.state.charaters.map(friend => (
          <PicCard
            pushCharater={this.pushCharater}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;