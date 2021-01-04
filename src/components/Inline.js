import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        <h1 className="error">Error</h1>
        {/* appStyles.module.css는 로컬리 스코프 */}
        {/* appStyles.css는 스코프 넘어감 error 처럼됨 -충돌우려*/}
        </div>
    )
}

export default Inline
