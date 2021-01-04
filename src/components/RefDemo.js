import React, { Component } from 'react'

class RefDemo extends Component {
    constructor(props) {
        super(props)
    //  this.state메소드 지우고, property
        this.inputRef = React.createRef()
    // 2번째는 callback으로
        // this.cbRef = null
        // this.setCbRef = (element)=> {
        //     this.cbRef = element
        // }
    }
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
        // 2번째 callback
        // if (this.cbRef){
        //     this.cbRef.focus() // current 안불러도 되지만 old way
        // }
    }
    clickhandler = ()=> {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                {/* <input type='text' ref={this.setCbRef}/> */}

                <button onClick={this.clickhandler}>Click for React.createRef()</button>
            </div>
        )
    }
}

export default RefDemo
