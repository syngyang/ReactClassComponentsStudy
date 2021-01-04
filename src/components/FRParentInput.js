import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    clickHandler = ()=> {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>FRP Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput

        
// 1. 패런트컴퍼넌트에 Ref 만들고- this.inputRef = React.createRef() 
// 2. 차이드 컴퍼넌트 인스턴트 에 붙여, props로 내려보내고
// 3. 차일드 ref 받아서, native input element에 붙여서, 다시 넘겨줌