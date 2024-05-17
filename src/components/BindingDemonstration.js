import React, { Component } from 'react'

export default class BindingDemonstration extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
   counter:0
      }

      // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(){
    //     this.setState(prevState => ({counter: prevState.counter + 1}))
    // }
    clickHandler = () => {
      this.setState(prevState => ({counter: prevState.counter + 1}))
  }
  render() {
    return (
      <div>
        <div>Counter:{this.state.counter}</div>
     {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
     {/* <button onClick={() => this.clickHandler()}>Click me</button> */}
     <button onClick={this.clickHandler}>Click me</button>
        </div>
    )
  }
}

