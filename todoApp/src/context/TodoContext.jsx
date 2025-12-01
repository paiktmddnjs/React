import React, { createContext, useContext, useEffect, useState } from 'react'

const TodoContext = createContext();

export const useTodos = () =>{
    const context = useContext(TodoContext);
    return context;
}

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });


    // useEffect로 인해 todos가 값이 변경될때 마다 이 함수 실행!
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

    const addTodo = (text, category) =>{
        const newTodo ={
            id: Date.now(),
            text,
            category,
            createdAt : new Date().toISOString(),
            completed : false,
        }

        setTodos(prev => [...prev, newTodo]);
        
        return newTodo;
    }


    // Todo 삭제
    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    }


    // Todo 수정
    const updateTodo = (id, updateTodo) =>{
        setTodos(prev =>
            prev.map(todo => 
                todo.id === id ? {...todo, ...updateTodo} : todo
            )
        )
    }

    // Todo의 성공 여부 >> !을 사용해 값을 반전시켜 상태를 정함!
    const toggleTodo = (id) => {
        setTodos(prev => 
            prev.map(todo => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    const value = {
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleTodo,
    }
    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    )
}