import React, {useState} from 'react'

function MyComponent() {
    
    const [name, setName] = useState();

    const updateName = () => {
        name ="Spongebob";
    }
    return ( <div>
                <p>Name:{name}</p>
                <button onClick={updateName}Set Name></button>
             </div>)
}

export default MyComponent