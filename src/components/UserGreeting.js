import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        // return this.state.isLoggedIn && <div>Welcome Syng</div>
        // 이때는 false는 아무것도 안보임

        return (
            this.state.isLoggedIn ? 
          // <div>Welcome Syng</div> : <div>Welcome Guest</div>
            (<div>Welcome Syng</div>) : (<div>Welcome Guest</div>)
        )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Syng</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return(
        //         <div>Welcome Syng</div>
        //     )
        // } else {
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>
        //             Welcome Syng
        //         </div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
