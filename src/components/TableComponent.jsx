import { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Context } from './../context/Context.jsx';
import { useParams } from 'react-router-dom';
import './TableComponent.css';

const TableComponent = () => {

  const { dataServices } = useContext(Context);
  const { hostname } = useParams();

  const alertData = [
    {id:0, name:'OK', color:'alert-success'},
    {id:1, name:'WARNING', color:'alert-warning'},
    {id:2, name:'CRITICAL', color:'alert-danger'},
    {id:3, name:'UNKNOWN', color:'alert-info'}
  ]
  
  return (
    <>
      <h5> Estado: {hostname}</h5>
         <Table striped bordered hover size="sm" className='table'>
            <thead>
              <tr>
                {/*<th>Nombre</th>*/}
                <th>Servicio</th>
                <th>Detalle</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dataServices.filter( (p) => p.host_name == hostname).map(({ host_name, service_description, plugin_output, current_state }, i) => (
                        <tr
                          key={i}
                          className="align-middle" >
                          {/*<td> {host_name} </td>*/}
                          <td> {service_description} </td>
                          <td> {plugin_output}</td>
                          <td> {current_state} </td>
                        </tr>
                      ))}
            </tbody>
        </Table>
    
    </>
  )
}

export default TableComponent