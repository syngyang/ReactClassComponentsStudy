import React, { Component } from 'react'
import {UserConsumer} from './userContext'

class ComponentF extends Component {
    styles = {
        color: "red"
    }
    render() {
        return (
            <>
                <p style={this.styles}>Component F</p>
                <UserConsumer>
                   
                   {(username)=> {
                            return <div>Hello {username}</div>
                       }
                   } 
                </UserConsumer>
              </> 
          
        )
    }
}

export default ComponentF
