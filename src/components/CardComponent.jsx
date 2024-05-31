import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './../components/';

const CardComponent = () => {

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
    <div className="gallery" >
      <div>CardComponent</div>
        <div>
            {contenidoArchivoHosts.map(({ host_name, service_description, plugin_output, current_state }, i) => (
            <Card style={{ width: '18rem' }}  key={i} >
            
              <Card.Body>
                <Card.Title>{host_name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Status: {current_state}</Card.Subtitle>
                <Card.Text> {service_description} </Card.Text>
                <Card.Text> {plugin_output} </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>

            </Card>))}
        </div>
      </div>
    </>
  )
}

export default CardComponent