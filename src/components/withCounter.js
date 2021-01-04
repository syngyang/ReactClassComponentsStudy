import React from 'react'

const withCounter = (WrappedComponent, incrementNumber)=> {
    class WithComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        incrementCount = ()=> {
            this.setState((prevState)=>{
                return {count: prevState.count + incrementNumber }
            })
        }
        render () {
            // return <OriginalComponent name={"Yang"} />
            console.log(this.props.name)
           
            return <WrappedComponent 
                        count={this.state.count} 
                        incrementCount = {this.incrementCount} 
                        {...this.props}
                   />

        }
    }
    return WithComponent
}

export default withCounter
