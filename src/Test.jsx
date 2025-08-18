import {useState} from 'react'

function Test() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            <h1>Hello React!</h1>
            <button onClick={setVisible(false)}>
            </button>
        </div>
    );
    }

export default Test;
