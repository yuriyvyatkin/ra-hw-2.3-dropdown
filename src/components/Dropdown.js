import { useState } from 'react';
import items from '../data/items';
import DropdownList from './DropdownList';

export default function Dropdown() {
  const [view, setView] = useState('');

  function handleDropdownClick() {
    setView(prevState => prevState === 'open' ? '' : 'open');
  }

  return (
    <div className={`dropdown-wrapper ${view}`}>
      <button
        className="btn"
        onClick={handleDropdownClick}
      >
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>

      <DropdownList items={items} />
    </div>
  );
}
