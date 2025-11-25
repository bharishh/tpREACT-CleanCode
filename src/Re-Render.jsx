// EXO 3

import {useState} from "react";

function ReRender() {
    const [user, setUser] = useState({name:""})

    function updateName(e)
    {
        setUser(prev =>({
            ...prev,
            name: e.target.value
        }))
    }
    return (
        <input value={user.name}  onChange={updateName} />
    )
}

export default ReRender