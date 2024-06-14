import React from 'react'
import { Button } from 'react-bootstrap'
import { snmp } from 'net-snmp'

function OpenDoor() {

    var session = snmp.createSession ("127.0.0.1", "public");

var oids = ["1.3.6.1.2.1.1.5.0", "1.3.6.1.2.1.1.6.0"];

session.get (oids, function (error, varbinds) {
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++) {
            if (snmp.isVarbindError (varbinds[i])) {
                console.error (snmp.varbindError (varbinds[i]));
            } else {
                console.log (varbinds[i].oid + " = " + varbinds[i].value);
            }
        }
    }
    session.close ();
});

session.trap (snmp.TrapType.LinkDown, function (error) {
    if (error) {
        console.error (error);
    }
});

  return (
    <div>
      
      <Button variant="primary" title="Apertura de puerta" size="sm" onclick={session()}>Acceso</Button>

    </div>
  )
}

export default OpenDoor