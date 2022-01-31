import React  from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, newItem, setNewItem}) {
  
  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    const submitedItem = {...newItem, [name]:value, id: uuid()}
    setNewItem(submitedItem)
  }
 
  return (
    <form className="NewItem" onSubmit={(e) => onItemFormSubmit(newItem, e)}>
      <label>
        Name:
        <input type="text" name="name"  onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange = {handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
