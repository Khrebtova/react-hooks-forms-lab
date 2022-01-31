import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleUpdateList }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce"
  });
  let updatedItemList= [...items];

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearch(event){
    setSearch(event.target.value)
  }
  
  function handleSubmit(submittedItem, e){
    e.preventDefault()
    console.log(submittedItem)
    handleUpdateList(submittedItem)
  }

   
  const itemsToDisplay = updatedItemList
    .filter((item) => {
      if (selectedCategory === "All"){
        return true
      }else{
        return item.category === selectedCategory ;
      }})
    .filter(item => item.name.includes(search))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleSubmit} newItem ={newItem} setNewItem ={setNewItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} searchValue={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
