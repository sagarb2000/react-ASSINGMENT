import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState(['Eggs', 'Milk', 'Cheese']);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editItem, setEditItem] = useState('');

  const addItem = () => {
    if (newItem.trim() === '') return;
    setItems([...items, newItem]);
    setNewItem('');
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const deleteList = () => {
    setItems([]);
  };

  const editItemStart = (index) => {
    setEditIndex(index);
    setEditItem(items[index]);
  };

  const editItemSave = () => {
    const updatedItems = [...items];
    updatedItems[editIndex] = editItem;
    setItems(updatedItems);
    setEditIndex(-1);
    setEditItem('');
  };

  return (
    <div className="App">
      <h1>Grocery Shopping</h1>
      <div className="list-container">
        {items.map((item, index) => (
          <div className="list-item" key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={editItem}
                onChange={(e) => setEditItem(e.target.value)}
              />
            ) : (
              <span>{item}</span>
            )}
            <div className="buttons">
              {editIndex === index ? (
                <button className="save-button" onClick={editItemSave}>
                  Save
                </button>
              ) : (
                <>
                  <button
                    className="edit-button"
                    onClick={() => editItemStart(index)}
                  >
                    ✏️
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteItem(index)}
                  >
                    🗑️
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="add-item-container">
        <input
          type="text"
          placeholder="Add something to your list"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>

      <button className="delete-list-button" onClick={deleteList}>
        Delete List
      </button>
    </div>
  );
}

export default App;

