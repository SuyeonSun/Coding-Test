import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Store() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9000/stores')
    //.then((data) => console.log(data.data))
    .then(data => {
      setStores(data.data);
    });
  }, []);
  
  return (
    <div className='App'>
      <div className="container-box">
        <div className="container">
          <div className='container-header'>
            <div>
              <Header></Header>
            </div>
          </div>
          {stores.map((store) => (
          <div key={store.id} className="item">
            <Link
              href={{
                pathname: '/[id]',
                query: { id: store.id, name: store.name, image: store.image, description: store.description, url: store.url },
              }}>
              <img src={store.thumb}/>
            </Link>
          </div> 
          ))}
        </div>
      </div>
      
    </div>
  )}

  