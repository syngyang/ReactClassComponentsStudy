import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Syng'
        }
        console.log("LifecycleA constructor")
    }
    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    
    componentDidMount(){
        console.log("LifecycleA componentDidMount")
        return true
    }
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = ()=> {
        this.setState({
            name: "Yang"
        })
    }
    render() {
        console.log("LifecycleA render")
        return (
            <>
            <div>LifecycleA</div>,
            <button onClick={this.changeState}>Change state</button>,
            <LifecycleB />
            </>
        )
    }
}

export default LifecycleA
