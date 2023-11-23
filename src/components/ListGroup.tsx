function ListGroup() {
  let items = ["Kisii", "Mogori", "Kenyenya", "Ogembo", "Mogonga"];
  //   Reassigning our array into an empty array
  items = [];

  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>Lists</h1>
  //         <p>No items found</p>
  //       </>
  //     );

  //   const message = items.length === 0 ? <p>No items found</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items found</p> : null;
  //   };

  return (
    <>
      <h1>List</h1>
      {/* Now we can use ternary operator to render our items dynamically */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No items found</p> : null} */}

      {/* We can use logical AND to render items if a certain condition is true instead of a ternary operator */}

      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
