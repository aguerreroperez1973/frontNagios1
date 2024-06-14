
import snmp from 'net-snmp';
var oid = "1.3.6.1.2.1.1.2.0";

function doneCb (error) {
    if (error)
        console.error (error.toString ());
        console.log('doneCbtwo');
}

function feedCb (varbinds) {
    for (var i = 0; i < varbinds.length; i++) {
        if (snmp.isVarbindError (varbinds[i])) {
            console.error (snmp.varbindError (varbinds[i]));
        } else {
            console.log (varbinds[i].oid + "|" + varbinds[i].value);
        }
    }
        //console.log('feedCb');
}

var maxRepetitions = 1;

var session = snmp.createSession('192.168.1.82', 'public', {version: snmp.Version2c});

function loop() {
        session.walk (oid, maxRepetitions, feedCb, doneCb);
        //session.walk (oid, maxRepetitions, feedCbtwo, doneCbtwo);
}

setInterval(loop, 20000);