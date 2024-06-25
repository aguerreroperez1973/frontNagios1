import { Button } from 'react-bootstrap'

function OpenDoor() {

const HandleClick = () => {
   const script = document.createElement('script');
    script.src = "testsnmp3.js";
    script.async = true;
    document.body.appendChild(script);
}

  return (
    <div>
      <Button variant="primary" title="Apertura de puerta" size="sm" onClick={HandleClick}>Acceso</Button>
    </div>
  )
}

export default OpenDoor
