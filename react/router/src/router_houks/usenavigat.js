
import { useNavigate } from 'react-router-dom';

export default function Usenavigat() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/new-page');
  }

  return (
    <button onClick={handleClick}>Go to new page</button>
  );
}
{/*useNavigate: This hook gives you access to a navigate function,
 which you can use to programmatically navigate to different pages in your app.*/}