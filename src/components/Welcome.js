import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props;
        // const {state1, state2} = this.state; // state가 있다면 
        return (
            <div>
                {/* <h1>Welcome {this.props.name} as {this.props.heroName}</h1> */}
                <h1>Welcome {name} as {heroName}</h1>
            </div>
        )
    }
}
export default Welcome;