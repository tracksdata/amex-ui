import React, { useState } from 'react';

const Button = (props) => {
    const [count, setCount] = useState(0);

    function btnHitCount() {
        setCount(count + 1)
        props.onAction(props.btnLable);
        // onAction is a props name as function.
    }
    return (


        <div>
            <span>{count}</span>
            <hr />
            <button onClick={e => btnHitCount()} className="btn btn-primary">{props.btnLable}</button>

        </div>
    );
};

export default Button;