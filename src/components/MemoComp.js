import React from 'react'
// import MemoComp from './MemoComp'

function MemoComp({name}) {
    console.log('*Rendering Memo Component*')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
// 펑션날 컴포넌트에서는 class Component의 PureComponanet 를 "React.memo(MemoComp)" 로 끝냄