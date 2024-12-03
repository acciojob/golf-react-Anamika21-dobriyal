import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Handler for Start button
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Decide whether to render ball or button
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // Event listener for keydown
  handleKeyDown(event) {
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: `${newPos}px` },
        };
      });
    }
  }

  // Add event listener after the component mounts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // Clean up event listener when component unmounts
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}
export default App;
