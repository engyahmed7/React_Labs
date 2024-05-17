import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ProductList({ onDataToSend , category ,search }) {
  const [data, loading] = useFetch('https://fakestoreapi.com/products');
  const [filteredData, setFilteredData] = useState([]);
    // console.log('ProductList ', category);
  useEffect(() => {
    if (!loading) {
        if(category){
            setFilteredData( data.filter((item) => item.category === category));
            // console.log(filteredData);
            onDataToSend(filteredData);
        }else if(search) {
            setFilteredData( data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())));
            console.log(filteredData);
            onDataToSend(filteredData);
        }
        onDataToSend(data);
      }
    }, [data, loading, onDataToSend,category,search]
    );
  
  return (
    <div>
      {loading ? (
        <div className="text-center mt-5">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        </div>
      ) : 
      category || search ?
      (
        <div className='row'>
          {filteredData.map((product) => (
            <div key={product.id} className='col-md-4 mb-4'>
              <div className='card h-100 shadow'>
                <img src={product.image} className='card-img-top' alt={product.title} />
                <div className='card-body'>
                  <h5 className='card-title'>{product.title}</h5>
                  <p className='card-text'>{product.description}</p>
                </div>
                <div className='card-footer'>
                  <p className='card-text text-muted'>${product.price}</p>
                  <button className='btn btn-primary btn-sm'>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )  :
      (
        <div className='row'>
          {data.map((product) => (
            <div key={product.id} className='col-md-4 mb-4'>
              <div className='card h-100 shadow'>
                <img src={product.image} className='card-img-top' alt={product.title} />
                <div className='card-body'>
                  <h5 className='card-title'>{product.title}</h5>
                  <p className='card-text'>{product.description}</p>
                </div>
                <div className='card-footer'>
                  <p className='card-text text-muted'>${product.price}</p>
                  <button className='btn btn-primary btn-sm'>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )

    }
    </div>
  );
}
