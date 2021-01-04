import React from 'react'

// function Greet(props) {
// const Greet = ({name, heroName})=> { //destructuring
const Greet = (props)=> {
    const {name, heroName} = props;
    return (
        <div>
            {/* <h1>{props.name} and {props.heroName}</h1>
            {props.children} */}
            <h1>{name} a.k.a {heroName}</h1>
        </div>
    )
}

export default Greet
