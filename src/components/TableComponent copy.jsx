import { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Context } from './../context/Context.jsx';
import { useParams } from 'react-router-dom';
import './TableComponent.css';
import { Button, Card } from 'react-bootstrap';

const TableComponent = () => {

  const { dataServices, dataHosts } = useContext(Context);
  const { hostname } = useParams();

  const alertData = [
    {id:0, name:'OK', color:'alert-success'},
    {id:1, name:'WARNING', color:'alert-warning'},
    {id:2, name:'CRITICAL', color:'alert-danger'},
    {id:3, name:'UNKNOWN', color:'alert-info'}
  ]
  
  return (
    <>
    <Card className='mx-auto mt-2' style={{ width: '40rem'}}>
      <Card.Header>Detalles del sitio</Card.Header>
      <Card.Body>
        <Card.Title>{hostname}</Card.Title>
        <Card.Text>
        {/*///////////////////////////////////////////////////////////////*/}
        <div  className="table">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      {/*<th>Nombre</th>*/}
                      <th>Servicio</th>
                      <th>Detalle</th>
                      <th>Status</th>
                      <th>Last check</th>
                    </tr>
                  </thead>
                  <tbody>
                  {dataHosts.filter( (p) => p.host_name == hostname).map(({ host_name, check_command , plugin_output, current_state, last_check }, i) => (
                              <tr
                                key={i}
                                className="align-middle" >
                                {/*<td> {host_name} </td>*/}
                                <td> {check_command} </td>
                                <td> {plugin_output}</td>
                                <td> {current_state} </td>
                                <td> {Date(1717726967)} </td>
                              </tr>
                            ))}
                    {dataServices.filter( (p) => p.host_name == hostname).map(({ host_name, service_description, plugin_output, current_state, last_check }, i) => (
                              <tr
                                key={i}
                                className="align-middle" >
                                {/*<td> {host_name} </td>*/}
                                <td> {service_description} </td>
                                <td> {plugin_output}</td>
                                <td> {current_state} </td>
                                <td> {Date()} </td>
                              </tr>
                            ))}
                  </tbody>
              </Table>
          </div>
          {/*///////////////////////////////////////////////////////////////*/}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default TableComponent