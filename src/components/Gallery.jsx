//import React from 'react'
import { useContext } from 'react';
import { Context } from './../context/Context.jsx';
import CardComponent from './CardComponent';
import './Gallery.css';
import { Card } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

const Gallery = () => {
    const { dataHosts, dataSite, alertData } = useContext(Context);
  
  return (
    <>
      <div className="gallery">
        {/* ///////////////  HOST ACTIVOS EN NAGIOS //////////////////////////////////////////////////////*/}
            {  dataHosts?.map( (p,i) => { return < CardComponent dataHost={p} key={i}> </CardComponent>})  }
        {/* ///////////////  HOST NO ACTIVOS EN NAGIOS //////////////////////////////////////////////////////*/}
            { dataSite.map( ({host_name, current_state},i) => { 
            return <Card style={{ width: '18rem'}} className={ alertData.filter( (co) => co.id == current_state ).map((c) => c.color ) } key={i} >
                    <Card.Body>
                          <Card.Title> <strong> {host_name}</strong></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{ alertData.filter( (co) => co.id == current_state ).map((c) => c.name ) }</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                    <div className="m-0 p-0 d-flex justify-content-around">
                                  <Link to={`host/${host_name}`}> <h6> Detalles </h6></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  <Link to={`NagiosPage/${host_name}`}> <h6> NAGIOS </h6></Link>
                                </div>
                      {/*} <OpenDoor></OpenDoor> */}
                  </Card.Footer>
                </Card> })}
      </div>
    </>
  )
}

export default Gallery