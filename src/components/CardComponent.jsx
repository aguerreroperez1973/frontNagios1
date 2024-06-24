import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Context } from './../context/Context.jsx';
import './CardComponent.css';
import OpenDoor from './OpenDoor.jsx';
import { Button } from 'react-bootstrap';

const CardComponent = ( { dataHost } ) => {

  const { dataServices, localdatos, alertData } = useContext(Context);

  return (
    <>
        <div>
            <Card style={{ width: '18rem'}} className={ 
              dataServices.filter( h => h.host_name == dataHost.host_name).map( el => {
               if(el.current_state > 0){ return "alert alert-danger"} return "alert alert-success" })} >
                    <Card.Body>
                            <Card.Title> <strong> {dataHost.host_name} </strong> </Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted">{alertData.filter( (co) => co.id == dataHost.current_state ).map( (d) => { return d.name})}</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <div className="m-0 p-0 d-flex justify-content-around">
                                    <Link to={`host/${dataHost.host_name}`}> <h6>Detalles</h6></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to={`RtuPage/${dataHost.host_name}`}> <h6>RTU WEB</h6></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to={`NagiosPage/${dataHost.host_name}`}> <h6>NAGIOS</h6></Link>
                                  </div>
                        {/*} <OpenDoor></OpenDoor> */}
                    </Card.Footer>
            </Card>
        </div>
    </>
  );
}

export default CardComponent