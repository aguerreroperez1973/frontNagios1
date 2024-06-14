
//import snmp from 'snmp-native';
import snmp from 'net-snmp';
//MEL-Seguridad-Mineroducto-R

var options = {
    port: 161,
    retries: 1,
    timeout: 6000,
    transport: "udp4",
    version: snmp.Version2c,
    idBitsSize: 32,
    backoff: 1.0,
    backwardsGetNexts: true,
    reportOidMismatchErrors: false
    };

const session = snmp.createSession("192.168.1.82", "public", options );

const oids = [".1.3.6.1.2.1.1.2.0"];

session.get(oids, function (error, varbinds) {
    if (error) {
        console.error (error.toString ());
    } else {
        for (var i = 0; i < varbinds.length; i++) {
            // for version 1 we can assume all OIDs were successful
            console.log (varbinds[i].oid + "|" + varbinds[i].value);
        
            // for version 2c we must check each OID for an error condition
            if (snmp.isVarbindError (varbinds[i]))
                console.error (snmp.varbindError (varbinds[i]));
            else
                console.log (varbinds[i].oid + "|" + varbinds[i].value);
        }

    }
    session.close ();
});
