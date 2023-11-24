import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;

  //Define a function that does something upon selecting an item
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
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
      <h1>{heading}</h1>
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
              setSelectedIndex(index), onSelectItem(item);
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
// Passing data via props - In an instance where
// Passing functions via props
// State vs Props
// Passing children to a component
