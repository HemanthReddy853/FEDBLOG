import React from "react";
class App5 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { change: true };
    }
    render() {
      return (
        <div>
          <button
            onClick={() => {
              this.setState({ change: !this.state.change });
            }}
          >
            Click Here!
          </button>
          {this.state.change ? (
            <h1>Welcome to vvit</h1>
          ) : (
            <h1>Welcome to 3-cse-c</h1>
          )}
        </div>
      );
    }
  }
  export default App5;
  