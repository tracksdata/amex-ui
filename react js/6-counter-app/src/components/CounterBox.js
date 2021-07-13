import React, { useState } from 'react';
import Button from './Button';

const CounterBox = (props) => {
    
    const [count, setCount] = useState(0)

    function totalCount(e) {
        console.log('clicked on ' + e);
        setCount(count + e)
    }

    function renderButtons(buttonLables) {
        return buttonLables.map((btnLable, idx) => {
            return (
                <div className="col-2 mystyles text-center" key={idx}>
                    <div className="card body">

                        <Button btnLable={btnLable} onAction={e => totalCount(e)} />

                    </div>
                </div>

            )
        })
    }

    return (
        <div className="card">
            <div className="card-header"><h3>Counter Box</h3></div>
            <div className="card-body">
                {renderButtons(props.buttonLables)}

            </div>
            <div className="card-footer text-center">
                <h2>Total Count: {count}</h2>
            </div>
        </div>

    );
};

export default CounterBox;