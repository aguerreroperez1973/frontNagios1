import { Button } from 'react-bootstrap'
import useExternalScripts from '../hooks/useExternalScripts'

function OpenDoor() {

const HandleClick = () => {
  useExternalScripts("/commandOK.cjs")
  /* const script = document.createElement('script');
    script.src = "/commandOK.cjs";
    script.async = true;
    document.body.appendChild(script);*/
}

  return (
    <div>
      <Button variant="primary" title="Apertura de puerta" size="sm" onClick={HandleClick}>Acceso</Button>
    </div>
  )
}

export default OpenDoor
