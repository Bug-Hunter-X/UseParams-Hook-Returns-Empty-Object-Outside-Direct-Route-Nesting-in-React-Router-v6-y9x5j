# useParams Hook Unexpected Behavior in React Router v6

This repository demonstrates a subtle bug in React Router v6 concerning the `useParams` hook. When using `useParams` within a component that isn't directly nested within a route, and that component's rendering is conditional, the hook might return an empty object, even if the URL contains parameters. This issue often results in silent failures, making debugging challenging.

## Reproducing the Bug

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the behavior as described in the `bug.js` file.

## Solution

The solution involves ensuring that `useParams` is used within a component that's always rendered within an active route context.  See `bugSolution.js` for a corrected implementation.  The key is to restructure your component tree to prevent conditional rendering of components dependent on `useParams`.  Alternatively, you may need to use a different approach like accessing the parameters from the `useLocation` hook and parsing the URL manually.