import React from 'react';
import { validateForm,loadData} from './FunctionalCounter';

const Testt = () => {
    return (
        <div>
            <h1>Testt Component</h1>
            <hr/>
            {validateForm()}
            {loadData()}
            
        </div>
    );
};

export default Testt;