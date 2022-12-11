import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams} from 'react-router-dom';

const FullPizza = () => {
    const [pizza,setPizza] = useState()
    const {id} = useParams()
    useEffect(()=>{
        async function fetchPizza(){
            try{
             const {data} = await axios.get('https://63767cd7b5f0e1eb850d1867.mockapi.io/items/' + id)
             setPizza(data);
            }catch (error){
             alert('error')
            }
        }
        fetchPizza()
    },[])
    if(!pizza){
      return "...loading"
    }
  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
      <h4>{pizza.price} $</h4>
    </div>
  );
};

export default FullPizza;
