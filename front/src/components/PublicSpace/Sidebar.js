import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <h2>Filtres</h2>
      <ul>
        <li><input type="checkbox" /> Plomberie</li>
        <li><input type="checkbox" /> Jardinage</li>
        <li><input type="checkbox" /> Ménage</li>
        <li><input type="checkbox" /> Électricité</li>
        <li><input type="checkbox" /> Peinture</li>
        <li><input type="checkbox" /> Menuiserie</li>
        <li><input type="checkbox" /> Climat et chauffage</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
