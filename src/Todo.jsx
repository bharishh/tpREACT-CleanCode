import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
    const [todos, setTodos] = useState([]);

    function addTodo(txt) {
        setTodos(prev => [...prev, txt]);
    }

    function deleteTodo(index) {
        setTodos(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h1>todos</h1>

            <TodoForm onAdd={addTodo} />

            <TodoList
                todos={todos}
                onDelete={deleteTodo}
            />
        </div>
    );
}