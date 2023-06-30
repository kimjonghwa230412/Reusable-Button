const ADD_TODO = 'ADD_TODO'
const DEL_TODO = 'DEL_TODO'
const DONE_TODO = 'DONE_TODO'

export const addTodo = (payload) => {
    return { type: ADD_TODO, payload }
}

export const DelTodo = (payload) => {
    return { type: DEL_TODO, payload }
}

export const DoneTodo = (payload) => {
    return { type: DONE_TODO, payload }
}

const initialState = {
    todos: [
        {
            id: 0,
            title: '',
            body: '',
            status: false
        }
    ]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case DEL_TODO:
            return {
                ...state, todos: state.todos.filter((item) => item.id !== action.payload)
            }
        case DONE_TODO:
            return {
                ...state, todos: state.todos.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item, status: !item.status,
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}

export default todos;