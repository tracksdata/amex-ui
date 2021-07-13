import React from 'react';

const Story = (props) => {
    return (
        <div>
            <li className="list-group-item">
                {props.myStory.author} - {props.myStory.body}
            </li>
        </div>
    );
};

export default Story;