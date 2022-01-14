import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import data from '../db.json';
import Link from 'next/link';

export default function Store() {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9000/stores')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setStores(data);
    });
  }, []);
  
  return (
    <div>
      <Header></Header>

      <div className="container">
        {data.stores.map((store) => (
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
  )}
