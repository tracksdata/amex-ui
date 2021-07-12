import React from 'react';


function renderMessage(props) {
    return  <h1>{props.message}</h1> 
}

const Greet = (props) => {
    let { message } = props;
    return (
        <div>
            <div className="card">
                <div className="card-header">Greet Component</div>
                <div className="card-body">
                    <h1>Greet Component</h1>
                    <hr />
                    {renderMessage(props)}
                </div>
            </div>
        </div>
    );
};

export default Greet;