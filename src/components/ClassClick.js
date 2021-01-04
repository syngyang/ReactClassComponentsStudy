import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked the button in ClassClick.js')
    }
    render() {
        return (
            <div>
               <button onClick={this.clickHandler}>Click Me</button> 
            </div>
        )
    }
}

export default ClassClick
