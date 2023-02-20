
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { userId } = useParams();

  // fetch user details using `userId`

  return (
    <div>
      User details for ID {userId}
    </div>
  );
}




{/*useParams: This hook allows you to access 
the dynamic parameters in the current URL, such as :id in /users/:id.*/}