import React, { useContext } from "react";
import { FamilyContext } from "../FamilyContext";

const style = {
    color: 'red',
    fontWeight: '900',
}
function Child() {
    const data = useContext(FamilyContext)
    console.log('data', data) // {houseName: 스파르타, pocketMoney : 10000}
    return (
        <div>
            나는 이 집안의 막내에요!<br />
            할아버지가 우리 집ㅇ 이름은 <span>{data.houseName}</span> 이라고 하셨어요.
            <br />
            게다가 용돈도 <span>{data.pocketMoney}</span>원 만큼이나 주셨어요!
        </div>
    )
}

export default Child