import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        // this.clickandler = this.clickHandler.bind(this)
        // 위 경우는 button에 onClick= {this.clickhandler} 라고만 하면됨
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }
    clickHandler = ()=> {
        this.setState({
            message: 'Goodbye!!!'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Click Here</button>
                <button onClick={()=> this.clickHandler()}>Click with arrow function</button>
                {/* 이번에는 괄호를 끝에 해줌 */}
            </div>
        )
    }
}

export default EventBind
