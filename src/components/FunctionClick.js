import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('button cliked')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
