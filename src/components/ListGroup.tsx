function ListGroup() {
  const items = ["Kisii", "Mogori", "Kenyenya", "Ogembo", "Mogonga"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
