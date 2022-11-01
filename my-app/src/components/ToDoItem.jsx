import React from "react";

export default function ToDoItem({todo, index}) {
    return (
        <li>
            <span>
                <strong>{index+1}</strong>
                <input 
                type="checkbox"
                />
                {todo.title}            
            </span>
            <button>&times;</button>
        </li>
    )
}