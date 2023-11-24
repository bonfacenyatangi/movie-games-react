import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Kisii", "Mogori", "Kenyenya", "Ogembo", "Mogonga"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
