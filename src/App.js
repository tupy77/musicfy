import React from "react";
import { Button } from "semantic-ui-react";
import { getAuth } from "firebase/auth";

export default function App() {
  const auth = getAuth();
  console.log(auth);

  return (
    <div>
      <Button primary>Primary</Button>
    </div>
  );
}
