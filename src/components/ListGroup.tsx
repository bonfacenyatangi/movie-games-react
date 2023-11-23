import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Kisii", "Mogori", "Kenyenya", "Ogembo", "Mogonga"];
  //   Reassigning our array into an empty array
  //   items = [];

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
  //   Event handler function
  //   const handleClick = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {/* Now we can use ternary operator to render our items dynamically */}
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No items found</p> : null} */}

      {/* We can use logical AND to render items if a certain condition is true instead of a ternary operator */}

      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// Handling click events
// Managing state
