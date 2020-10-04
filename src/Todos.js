import React from 'react';

const Todos = ({todos, deleteTodo, changeOnHover, changeOffHover})=>{
    const todoList = todos.length?(
            todos.map(todo=>{
                return (
                    <div className={"collection-item"} key={todo.id} onMouseOver={changeOnHover} onMouseLeave={changeOffHover}>
                        <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                    </div>
                )
            })
        ):
        (
            <p className={"center"}>You have no todo's left, yay!</p>
        )
    return (
        <div className={"todos collection"}>
            {todoList}
        </div>
    );
}

export default Todos;