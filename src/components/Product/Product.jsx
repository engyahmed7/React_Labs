import React, { useState } from 'react';
import ProductList from '../ProductList/ProductList';
import Filter from '../Filter/Filter';
import SearchProduct from '../SearchProduct/SearchProduct';

export default function Product() {
    const [filterData, setFilterData] = useState('');
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('');

    
    const handleDataFromProductList = (data) => {
        setFilterData(data)
    }

    const handleCategoryChange = (category) => {
        // console.log("from parent ", category);
        setCategory(category);
        // return filterData.filter((item) => item.category === category);
    }

    const handleSearchProduct = (search) => {
        console.log("searching product" , search);
        setSearch(search);
        // return filterData.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    }


  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1 className="mt-5 mb-2">Product List</h1>
        </div>
        <div className="col-md-4">
          <Filter data={filterData} onCategoryChange={handleCategoryChange}/>
          <SearchProduct  searchProduct={handleSearchProduct} />
        </div>
      </div> 
      <div className="row">
        <div className="col-md-12">
          <ProductList onDataToSend={handleDataFromProductList} category={category} search={search}/>
        </div>
      </div>
    </div>
  );
}
