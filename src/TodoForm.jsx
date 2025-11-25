import { useState } from "react";

export default function TodoForm({ onAdd }) {
    const [txt, setTxt] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!txt.trim()) return;
        onAdd(txt);
        setTxt("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={txt} onChange={e => setTxt(e.target.value)} />
            <button>add</button>
        </form>
    );
}