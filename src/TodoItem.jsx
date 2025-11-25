

export default function TodoItem({ text, onDelete }) {
    return (
        <li>
            {text}
            <button onClick={onDelete}>x</button>
        </li>
    );
}