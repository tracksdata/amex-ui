import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import StoryBox from './components/StoryBox';

const App = () => {

  const stories = [

    { id: 1, author: 'Praveen', body: 'I love React JS' },
    { id: 2, author: 'James', body: 'React JS functional Programming' },
    { id: 3, author: 'Divya', body: 'React JS Hooks' },
    { id: 4, author: 'Sarah', body: 'React JS life cycle' },
    { id: 5, author: 'Bucky Wall', body: 'React Js State management' },

  ]


  const title = 'Story Box';

  return (
    // JSX or HTML template
    <div className="container">
      <h1>APP Component</h1><hr />


      <StoryBox myStories={stories} title={title} />



    </div>
  );
};

export default App;