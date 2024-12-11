To solve this issue, ensure that the component using `useParams` is always rendered within an active route's context.  One approach is to restructure your component tree:

```javascript
import { useParams, useLocation } from 'react-router-dom';
import { useState } from 'react';

function MyComponent() {
  const { id } = useParams(); // this will work correctly now
  console.log(params);
  return <div>Component id: {id}</div>;
}

function MyPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  return (
    <div>
      <MyComponent/>
      {/* If you need conditional rendering, use location.search to get parameter outside route */}
      {id && <div>Parameter from url: {id}</div>}
    </div>
  );
}

```

This ensures that `useParams` is called within the context of a route and consistently receives the correct parameters.