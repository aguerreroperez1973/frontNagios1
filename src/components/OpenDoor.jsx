import React from 'react'
import { Button } from 'react-bootstrap'
//import useScript from 'hooks/useScript';
//import snmp from 'snmp-native';
//import { snmp } from 'net-snmp'

function OpenDoor() {

const HandleClick = () => {
    const script = document.createElement('script');
}

  return (
    <div>
      <Button variant="primary" title="Apertura de puerta" size="sm" onClick={HandleClick}>Acceso</Button>
    </div>
  )
}

export default OpenDoor
