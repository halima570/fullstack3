//App.js


import { Provider } from 'react-redux';
import store from './store';
import PostList from './postList';
import CreatePost from './createPost';


function App() {
 

  return (
    <Provider store={store}> {/* the component Provider needs a props store  */}

    <div className="App">
      <CreatePost/>
    <PostList/>
    </div>
    </Provider>

  );
}

export default App;