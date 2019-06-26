import React from 'react';
import './reset.css';
import './App.css';
import Group from './Group';
import Filter from './Filter';

const App = () => {

  return (
    <main className="layout" id="root">
      <header className="header">
        <h1>Grocery List</h1>
      </header>

      <form id="newItem" className="newitem" autoComplete="off">
        <label htmlFor="itemName" className="line-label">New Item</label>
        <div className="addnew">
          <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
          <input type="submit" value="Add" className="form-component btn" />
        </div>
      </form>

      <section id="filterCategories">
        <Filter />
        <form id="newCat" className="cat-new">
          <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category" />
        </form>
      </section>

      <Group />
    </main>
  );
}

export default App;
