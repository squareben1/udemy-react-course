import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import "./App.css";

class App extends Component {
  state = {
    inputText: "text",
  };
  textChangeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    const charList = this.state.inputText.split('').map((char) => {
      return <CharComponent char={char} />;
    });
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.textChangeHandler}
          />
          <ValidationComponent inputText={this.state.inputText} />
          <p>{this.state.inputText.length}</p>

          <div>
            {charList}
          </div>

          <hr />
          <ol>
            <li>
              Create an input field (in App component) with a change listener
              which outputs the length of the entered text below it (e.g. in a
              paragraph). DONE
            </li>
            <li>
              Create a new component (=> ValidationComponent) which receives the
              text length as a prop DONE
            </li>
            <li>
              Inside the ValidationComponent, either output "Text too short" or
              "Text long enough" depending on the text length (e.g. take 5 as a
              minimum length) DONE
            </li>
            <li>
              Create another component (=> CharComponent) and style it as an
              inline box (=> display: inline-block, padding: 16px, text-align:
              center, margin: 16px, border: 1px solid black). DONE
            </li>
            <li>
              Render a list of CharComponents where each CharComponent receives
              a different letter of the entered text (in the initial input
              field) as a prop. DONE
            </li>
            <li>
              When you click a CharComponent, it should be removed from the
              entered text.
            </li>
          </ol>
          <p>
            Hint: Keep in mind that JavaScript strings are basically arrays!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
