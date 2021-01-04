import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComponent from './RegComponent'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Syng Yang"
        }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: "Syng Yang"
            })
        }, 2000)
    }
    render() {
        console.log('Parent Comp render*********')
        return (
            <div>
                Parent Component
                {/* name을 props로 전달 */}
                <MemoComp name={this.state.name}/>
                <RegComponent name={this.state.name} />
                <PureComp name={this.state.name} />

            </div>
        )
    }
}

export default ParentComp
