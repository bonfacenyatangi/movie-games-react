import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kisii", "Mogori", "Kenyenya", "Ogembo", "Mogonga"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
      <Alert>
        Hello <span>There</span> World
      </Alert>
    </div>
  );
}

export default App;
