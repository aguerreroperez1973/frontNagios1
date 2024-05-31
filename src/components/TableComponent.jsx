import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const TableComponent = () => {

    const [contenidoArchivo, setContenidoArchivo] = useState([]);
  const url= './../public/status.json';
  
  useEffect(() => {

    const leerArchivoDeTexto = async () => {
      try {
        const response = await fetch('./../public/status.json');
        if (response.ok) {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setContenidoArchivo(data)
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
          <th>#</th>
          <th>Hostname</th>
          <th>Servicio</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {/* contenidoArchivo.map( el => ( <li key={el.host_name} > {el.host_name } </li> ) ) */} 
         {/*contenidoArchivo*/}
         {contenidoArchivo.map(({ host_name, service_description, plugin_output }, i) => (
                  <tr
                    key={i}
                    className="align-middle" >
                    <td> * </td>
                    <td> {host_name} </td>
                    <td> {service_description} </td>
                    <td> {plugin_output}</td>
                    {/*<td> {tipo_doc} </td>
                    <td> {number_doc} </td>
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