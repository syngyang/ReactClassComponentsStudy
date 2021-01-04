import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
        // this.state = {
        // }
    }
    // 하위 Input component의 메소드를 불러 focus 함
    clickHandler = ()=>{
        this.componentRef.current.focusInput()
    }
    render() {
        return (
            <div>
                <Input ref= {this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
