import React, { Component } from 'react'

export default class Ccomponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    };

    this.incriment = this.incriment.bind(this);
    this.decriment = this.decriment.bind(this);
    this.reset = this.reset.bind(this);  
  }

  incriment() {
    this.setState (state=> ({
      count: state.count + 1
    }))
  }

  decriment() {
    this.setState (state=> ({
      count: state.count - 1
    }))
  }

  reset() {
    this.setState ({
      count: 0
    })
  }
  
  render() {
    return (
      <div>
        <h2>This is my class component № {this.state.count}</h2>
        <button type="button" onClick={this.incriment}>+</button>
        <button type="button" onClick={this.decriment}>-</button>
        <button type="button" onClick={this.reset}>Reset</button>
      </div>
    )
  }
}