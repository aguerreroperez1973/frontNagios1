//import React from 'react'
import { useContext } from 'react';
import { Context } from './../context/Context.jsx';
import CardComponent from './CardComponent';
import './Gallery.css';

const Gallery = () => {
    const { dataHosts } = useContext(Context);
    //console.log(dataHosts)
  return (
    <div className="gallery">
          {  dataHosts?.map( (p,i) => { return < CardComponent dataHost={p} key={i}> </CardComponent>})  }
    </div>
  )
}

export default Gallery