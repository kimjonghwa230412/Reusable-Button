import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, DelTodo, DoneTodo } from '../redux/modules/todos'

function Home() {
    const [input, setInput] = useState({ title: '', body: '' })
    const todos = useSelector((state) => state.todos.todos)
    const dispatch = useDispatch()

    const inputChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const addButton = () => {
        if (input.title !== '' && input.body !== '') {
            dispatch(
                addTodo({
                    id: todos.length + 1,
                    title: input.title,
                    body: input.body,
                    status: false
                })
            )
        }
        else {
            alert('제목과 내용을 모두 입력하세요')
            return
        }
        setInput({ title: '', body: '' })
    }

    const DoneButton = (id, status) => {
        dispatch(DoneTodo(id, status))
    }

    const DelButton = (id) => {
        dispatch(DelTodo(id))
    }


    return (
        <div>
            <div>
                <h2>My Todo-list</h2>
                <input
                    type='text'
                    placeholder='제목'
                    value={input.title}
                    name='title'
                    onChange={inputChange}
                />
                <input
                    type='text'
                    placeholder='내용'
                    value={input.body}
                    name='body'
                    onChange={inputChange} />
                <button onClick={addButton}>추가하기</button>
            </div>
            <h2>Working..</h2>
            <div>
                {
                    todos.filter((item) => item.status === false)
                        .map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                {item.body}
                                <button onClick={() => DoneButton(item.id, true)}>완료</button>
                                <button onClick={() => DelButton(item.id)}>삭제</button>
                            </div>
                        ))
                }
            </div>
            <h2>Done!</h2>
            <div>
                {
                    todos.filter((item) => item.status !== false)
                        .map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                {item.body}
                                <button onClick={() => DoneButton(item.id, false)}>완료</button>
                                <button onClick={() => DelButton(item.id)}>삭제</button>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Home