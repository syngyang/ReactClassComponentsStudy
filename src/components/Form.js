import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: ''
        }
    }
    handleUsernameChange = (event)=> {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event)=> {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event)=> {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event)=> {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        // const { username, comments, topic} = this.state;
        // 위 줄 삽입하면 아래 value={usenam}, value={comments}. value={topic}
        return (
            
            <form onSubmit={this.handleSubmit} action="">
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" 
                        value={this.state.username} 
                        onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="">Comments</label>
                    <textarea name="" id="" cols="30" rows="5"
                        value={this.state.comments} 
                        onChange={this.handleCommentsChange} ></textarea>
                </div>
                <div>
                    <label htmlFor="">Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange} name="" id="">
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
