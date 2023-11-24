import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kisii", "Mogori", "Kenyenya", "Ogembo", "Mogonga"];
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
    </div>
  );
}

export default App;
