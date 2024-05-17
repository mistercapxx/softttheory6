import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class MyComponent extends Component {

    constructor(props) {
        super(props)

        console.log('MyComponent constr')


        this.state = {
value : ''
        }
    }

    static getDerivedStateFromProps(props,state) {
        console.log('MyComponent getDerive');
        return null;
    }

    componentDidMount() {
        console.log('Comp Did Mount bro')
    }
    shouldComponentUpdate()
    {
        console.log('Comp should update');
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('Comp snapped')
        return null;
    }
    componentDidUpdate(){
        console.log('Comp did update')
    }
    changeState = () => {
        this.setState({value:'updated'});
    }
  render() {
    console.log('MyComponent render');

    return (
      <div>MyComponent
        <ChildComponent/>
        <button onClick={this.changeState}>Trigger update</button>
      </div>
    )
  }
}

