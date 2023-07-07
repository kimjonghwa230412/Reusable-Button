import React from 'react'
import * as S from "../style/Appstyle"
import { AiFillBell, AiFillCaretRight } from "react-icons/ai";


const Button = () => {

    return (
        <div>
            <h1>Button</h1>
            <S.Pridiv>
                <S.Pributton onClick={()=>alert('버튼을 만들어보세요')}>Large Primary Button<AiFillCaretRight size={15}/></S.Pributton>
                <S.PriMediumbutton>Medium</S.PriMediumbutton>
                <S.priSmallbutton>Small</S.priSmallbutton>
            </S.Pridiv>
            <div>
                <S.Nebutton onClick={()=>console.log(prompt('어렵나요?'))}>Large Negative Button<AiFillBell size={15} color="#580815"/></S.Nebutton>
                <S.NeMediumbutton>Medium</S.NeMediumbutton>
                <S.NeSmallbutton>Small</S.NeSmallbutton>
            </div>
        </div>
    )
}

export default Button