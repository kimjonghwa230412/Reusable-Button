import React, { useState } from 'react'
import * as S from "../style/Appstyle"

const Input = () => {
    const [content, setContent] = useState({name:'', price:'0'})

    const contentChange = (e) => {
        const {name, value} = e.target
        setContent({...content, [name]:value})
        console.log(content.price)
    }

    const SaveButton = () => {
        if (content.name !=='' && content.price !== '') {
            alert(`{name: ${content.name}, price: ${content.price}}`)
        } else {
            alert('이름과 가격 모두 입력하세요')
            return
        }
        setContent({name:'', price:''})
    }
    return (
        <div>
            <h1>Input</h1>
            <S.Inputdiv >  
                <h4>이름</h4>
                <S.NameInput
                    type='text'
                    placeholder=''
                    value={content.name}
                    name='name'
                    onChange={contentChange}
                />
                <h4>가격</h4>
                <S.PriceInput
                    type='localeString'
                    placeholder=''
                    value={content.price}
                    name='price'
                    onChange={contentChange} />
                <S.SaveButton onClick={SaveButton}>저장</S.SaveButton>
            </S.Inputdiv>
        </div>
    )
}

export default Input