import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (onNewCategory) => {

    // Validación de repetidos por indice - key
    if ( categories.includes(onNewCategory) ) return;

    setCategories([...categories, onNewCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory}/>
      {
        categories.map(category => (
          <GifGrid key={category} category={category}/>
        ))
      }
    </>
  );
};
