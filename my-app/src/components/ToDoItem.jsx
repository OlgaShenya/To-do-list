import React from "react";

export default function ToDoItem({todo, index, onChange}) {
    return (
        <li>
            <span>
                <strong>{index+1}</strong>
                <input 
                type="checkbox"
                onChange={() => onChange(todo.id)}
                />
                {todo.title}            
            </span>
            <button>&times;</button>
        </li>
    )
}