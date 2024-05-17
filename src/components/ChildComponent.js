import React, { Component } from 'react'

export default class ChildComponent extends Component {

    constructor(props) {
        super(props)

        console.log('ChildComponent constr')


        this.state = {

        }
    }

    static getDerivedStateFromProps(props,state) {
        console.log('ChildComponent getDerive');
        return null;
    }

    componentDidMount() {
        console.log('Child Did Mount bro')
    }
    shouldComponentUpdate() {
        console.log('Child should update')
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log('CHild snapshot')
        return null;
    }
    componentDidUpdate()
    {
        console.log('Child did update')
    }
  render() {
    console.log('ChildComponent render');

    return (
      <div>ChildComponent</div>
    )
  }
}

