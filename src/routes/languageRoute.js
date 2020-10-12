import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import useStore from "../zustand/zustand"
// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
        <Switch>
          <Route path="/:lang" children={<Child />} />
        </Switch>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let {lang} = useParams();
  const setLanguage = useStore(s=>s.setLanguage)
  React.useEffect(()=>{
    setLanguage(lang)
  },[lang])
  return (
    <div>
      <h3>ID: {lang}</h3>
    </div>
  );
}
