import React, { useState } from 'react'

export default function SearchProduct({ searchProduct }) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        // console.log("searching product" , e.target.value);
        setSearch(e.target.value);
        // console.log(search);
        searchProduct(e.target.value);
    }

  return (
    <>
        <form >
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={handleSearch} 
                
                placeholder="Search Product" aria-label="Search Product" aria-describedby="button-addon2"/>
                {/* <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button> */}
            </div>
        </form>
    </>
  )
}
