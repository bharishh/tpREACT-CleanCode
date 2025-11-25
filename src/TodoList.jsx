import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
    return (
        <ul>
            {todos.map((t, i) => (
                <TodoItem
                    key={i}
                    text={t}
                    onDelete={() => onDelete(i)}
                />
            ))}
        </ul>
    );
}