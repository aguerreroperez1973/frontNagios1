import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const TableComponent = () => {

    const [contenidoArchivoHosts, setContenidoArchivoHosts] = useState([]);
  const url= './../public/status.json';
  
  useEffect(() => {

    const leerArchivoDeTexto = async () => {
      try {
        const response = await fetch('./../public/status.json');
        if (response.ok) {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setContenidoArchivoHosts(data)
        } else {
          console.error('Error al cargar el archivo.');
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    leerArchivoDeTexto();
  }, []);
 
  return (
    <>
    <div>Table</div>
    <h5>Nagios status</h5>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Servicio</th>
          <th>Detalle</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
         {contenidoArchivoHosts.map(({ host_name, service_description, plugin_output, current_state }, i) => (
                  <tr
                    key={i}
                    className="align-middle" >
                    <td> {host_name} </td>
                    <td> {service_description} </td>
                    <td> {plugin_output}</td>
                    <td> {current_state} </td>
                    {/*<td> {number_doc} </td>
                    <td> {monto} </td>
                    <td> {saldo}</td>*/}
                  </tr>
                ))}


      </tbody>
    </Table>
    
    
    
    </>
  )
}

export default TableComponent