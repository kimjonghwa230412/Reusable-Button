import React from 'react'
import * as S from "./selectstyle"
const Select = () => {
    return (
        <S.Selectdiv1>
            <h1>Select</h1>
            <S.Selectdiv2>
                <S.Select1 name="languages" id="lang">
                    <option value="스프링">스프링</option>
                    <option value="자바">자바</option>
                    <option value="리액트">리액트</option>
                    <option value="리액트 네이티브">리액트 네이티브</option>
                </S.Select1>
                <S.Select2 name="languages" id="lang">
                    <option value="스프링">스프링</option>
                    <option value="자바">자바</option>
                    <option value="리액트">리액트</option>
                    <option value="리액트 네이티브">리액트 네이티브</option>
                </S.Select2>
            </S.Selectdiv2>
        </S.Selectdiv1>
    )
}

export default Select