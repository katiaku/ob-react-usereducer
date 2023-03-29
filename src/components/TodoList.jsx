import React, { useContext } from 'react';

const TodoList = () => {

    const { todoList, removeTodoItem, markAsCompleted } = React.useContext(
        TodoListContext
    );
    return (
        <ul>
            {todoList.map((todoItem) => (
                <li
                    className={`todoItem ${todoItem.completed ? "completed" : ""}`}
                    key={todoItem.id}
                    onClick={() => markAsCompleted(todoItem.id)}
                >
            {todoItem.label}
                <button
                    className="delete"
                    onClick={() => removeTodoItem(todoItem.id)}
                >
                    X
                </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
