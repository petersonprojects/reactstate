import React, { Component } from 'react';


class App extends Component {

  // instance variables = state
  constructor() {

    super()
    
    // creating state
    this.state = {
      txt: 'this is a text value',
      count: 0
    }

  }

  handleClick = () => {
    // BAD DOES NOT MANIPUALTE DOM
    // this.state.count = this.state.count + 1;

    this.setState({
      count: this.state.count + 1
    })

    let date = new Date();

    console.log(`${date}`);

  }

  render() {
    return (
      <>
        <h1> {this.state.txt}</h1>

        <br />

        <button onClick={this.handleClick}>Click Me {this.state.count}</button>

      </>
    )
  }
}

export default App
