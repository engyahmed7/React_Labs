import React, { useState } from 'react';

export default function Filter({ data, onCategoryChange }) {
//   const { data } = props;
  const [category, setCategory] = useState('');
  const uniqueCategories = data
    ? [...new Set(data.map((item) => item.category))]
    : [];
//   console.log(data);
  const handleCategoryChange = (e)=>{
    console.log(e.target.value);
    setCategory(e.target.value)
    onCategoryChange(e.target.value)
  }


  return (
    <>
      <form
        action="" 
        className="mb-1">
        <select
          name="category"
          id="category"
          onChange={handleCategoryChange}
          className="form-select form-select-sm"
          aria-label=".form-select-sm example">
          {data ? (
            uniqueCategories.map((category, index) => (
              <option
                key={index}
                value={category}
                className="text-dark">
                {category}
              </option>
            ))
          ) : (
            <option value="0">Loading...</option>
          )}
        </select>
      </form>
    </>
  );
}
