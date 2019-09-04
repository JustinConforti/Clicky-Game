import React, { Component } from 'react';
import './App.css';
import Characters from "./characters.json"
import Header from "./components/Header"
import CharacterBoard from "./components/CharacterBoard"
import DisplayMessage from "./components/DisplayMessage"

const arrangeCharacters = charactersArray => {

  for (let i=charactersArray.length -1; i > 0; i--) {

    let randomNum = Math.floor(Math.random() * (i +1 ))
    let randomIndex = charactersArray[randomNum]

    charactersArray[randomNum] = charactersArray[i];
    charactersArray[i] = randomIndex

  }

  return charactersArray
}

class App extends Component {
  state = {
    clickedPics: [],
    currentClickCount: 0,
    wins: 0,
    losses: 0,
    highScore: 0,
    Characters,
    results: "defaultMessage"
  };

  pictureClicked = (id) => {

    let clickedArray = this.state.clickedPics;
    let { highScore, currentClickCount } = this.state;

    if (clickedArray.indexOf(id) > -1) {
      this.setState({ clickedPics: [], currentClickCount: 0, losses: this.state.losses + 1, results: "lost"})

    } else {
      currentClickCount++

      clickedArray.push(id)
      this.setState({ clicks: clickedArray, currentClickCount: currentClickCount})
      if (currentClickCount > highScore) {
        this.setState({ highScore: currentClickCount })

      }

      if (currentClickCount % Characters.length === 0) {
        this.setState({clickedPics:[], wins: this.state.wins + 1, results: "won"})
      }else{
        this.setState({results: "defaultMessage"})
      }
    }

    this.setState({ Characters: arrangeCharacters(Characters) })
  };

  render() {

    return (

      <div>
         <Header clicks={this.state.currentClickCount} highScore={this.state.highScore} wins={this.state.wins} losses={this.state.losses} />

         <CharacterBoard Characters={this.state.Characters} pictureClicked={this.pictureClicked} />

         <DisplayMessage display={this.state.results} />
      </div>
    )
  }
}
export default App;
