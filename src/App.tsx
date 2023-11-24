import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import PageAlert from "./components/PageAlert";

function App() {
  let items = ["Kisii", "Mogori", "Kenyenya", "Ogembo", "Mogonga"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisable, setAlertVisable] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}

      {/* <Alert>
        Hello <span>There</span> World
      </Alert> */}
      {alertVisable && <PageAlert onClose={() => setAlertVisable(false)} />}
      <Button onClick={() => setAlertVisable(true)}>My Button</Button>
    </div>
  );
}

export default App;
