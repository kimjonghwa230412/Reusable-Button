import React from "react";
import Father from './Father'
import { FamilyContext } from "../FamilyContext";

function Grandfather() {
    const houseName = '스파르타'
    const pocketMoney = 10000;
    return (
        <FamilyContext.Provider value={
            {houseName,
                pocketMoney,
            }}>
            <Father />
        </FamilyContext>
    )

}

export default Grandfather;