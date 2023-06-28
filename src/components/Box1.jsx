import React from "react";

const style = {
    width: '100px',
    height: '100px',
    backgroundColor: '#01c49f',
    color: 'white',

    display: 'flex',
    justifycontent: 'center',
    alignItems : 'center'
}

function Box1({initCount}) {
    console.log('Box1 컴포넌트가 렌더링 되었습니다')
    return (
        <div>
            style={style}
            <button onClick={()=> {initCount}}>초기화</button>
        </div>
    )

}

export default React.memo(Box1)