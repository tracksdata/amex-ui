import React, { useState } from 'react';

const Button = (props) => {
    
    const [count, setCount] = useState(0);

    function btnHitCount() {
        setCount(count + 1)
        props.onAction(props.btnLable);
        // onAction is a props name as function.
    }

    return (

        <div className="card card-body">
            <span>
                <h5>{count}</h5>
            </span>
            <hr />

            <button
                onClick={e => btnHitCount()}
                className={props.btnLable>0?'btn btn-primary' : 'btn btn-danger'}><h5>{props.btnLable}</h5>
            </button>

        </div>
    );
};

export default Button;