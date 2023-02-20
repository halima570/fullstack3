import { useRouteMatch } from 'react-router-dom';

function MyComponent() {
  const match = useRouteMatch('/users/:id');
  if (match) {
    const { id } = match.params;
    // render component for user with ID `id`
  } else {
    // render default component
  }
}
{/*useRouteMatch: This hook allows you to check whether the current URL matches
 a given route and access information about the matched route, such as the params and url properties  */}