import React from 'react';
import Story from './Story';

const StoryBox = (props) => {

    function renderStories(myStories) {
        return myStories.map((story, idx) => {
            return (
                <Story key={idx} myStory={story} />
            )
        })
    }

    return (
        <div className="alert alert-info">
            <div className="card">
                <div className="card-header"><h3>{props.title}</h3></div>
                <div className="card-body">
                    <ul className="list-group">
                        {renderStories(props.myStories)}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default StoryBox;