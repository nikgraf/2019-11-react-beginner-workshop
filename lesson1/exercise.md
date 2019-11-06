## Setup

```
npx create-react-app my-app
cd my-app
npm run start
```

Remove all files from the `src/` directory and create a new `index.js` with the following content:

```jsx
import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1>Places</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## React - Rendering & Components

1. Render the whole list into one component. It should contain a preview only showing the name.

_Hint_ creatre your own or copy the dataset from `solution/src/data.js` to your `src/data.js` and import it using `import data from "./data.js"`

2. Add conditinal divs rendering the phone and email address if available in the data.
3. Add a Phone component that replaces `+43` with `0` and replace the phone rendering using this component
4. Add the following styles to your application and create a generic Card component rendering a div that's used to wrap each place entry in the list.

_Hint_ leverage children to avoid that Card needs to know anything about place props

```css
ul {
  list-style-type: none;
  padding: 0;
}
.card {
  display: block;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  padding: 1rem;
}
```

5. Bonus Exercise: Convert the card to accept a `tag` prop so we can make the card an li-element instead of having a `div` inside and `li`.
