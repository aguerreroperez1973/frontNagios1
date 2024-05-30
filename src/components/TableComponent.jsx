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
         { contenidoArchivo.map( el => ( <li key={el.host_name} > {el.host_name } </li> ) ) } 
         {/*contenidoArchivo*/}

         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    
    
    
    </>
  )
}

export default TableComponent