import { useHistory } from 'react-router-dom';

export default function Usehistory() {
  const history = useHistory();

  function handleClick() {
    history.push('/new-page');
  }

  return (
    <button onClick={handleClick}>Go to new page</button>
  );
}


{/* useHistory: This hook gives you access to the navigation history object,
 which allows you to programmatically navigate to different pages in your app.  */}