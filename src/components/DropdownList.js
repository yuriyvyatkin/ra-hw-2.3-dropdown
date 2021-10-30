import { useState } from 'react';
import DropdownItem from "./DropdownItem";

export default function DropdownList({ items }) {
  const [selectedItem, setSelectedItem] = useState('');

  function handleItemClick(event) {
    setSelectedItem(event.target.textContent);
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {items.map((item, index) => {
        console.log(selectedItem);
        return (
          <DropdownItem
            key={`${index}${item}`}
            item={item}
            handleItemClick={handleItemClick}
            style={{ color: item === selectedItem ? '#5380f7' : ''}}
          />
        );
      })}
    </ul>
  );
}
