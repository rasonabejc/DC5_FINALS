import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const App = () => {
  // Example array of items
  const initialItems = [
    { id: 1, value: 'Apple', category: 'fruit', details: 'An apple is a sweet, edible fruit produced by an apple tree.' },
    { id: 2, value: 'Carrot', category: 'vegetable', details: 'The carrot is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist.' },
    { id: 3, value: 'Banana', category: 'fruit', details: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa.' },
    { id: 4, value: 'Broccoli', category: 'vegetable', details: 'Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk, and small associated leaves are eaten as a vegetable.' },
    { id: 5, value: 'Orange', category: 'fruit', details: 'The orange is the fruit of various citrus species in the family Rutaceae.' },
  ];

  // State to store items and the selected item
  const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click
  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="container">
      <h1>List of Items</h1>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            {/* Make the item clickable */}
            <button className={selectedItem === item ? 'selected' : ''} onClick={() => handleClick(item)}>
              {item.value}
              {selectedItem === item && (
                <div className="details">
                  <h2>{item.value}</h2>
                  <p>{item.details}</p>
                </div>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
