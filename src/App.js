import React from 'react'
import {useSelector} from 'react-redux'

function App() {

  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!
  // useSelector(redux hook)
  const data = useSelector((state)=>{
    return state
  })
  console.log(data)
  return (
    <div>Redux!</div>
  )
  
}

export default App