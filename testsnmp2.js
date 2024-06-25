//import snmp from 'snmp-native';
var snmp = require("snmp-native");
const host = '192.168.0.240';
const community = 'MEL-Seguridad-Mineroducto-R';
const session = new snmp.Session({ host: host,port: 161, community: community });
const oid = '.1.3.6.1.4.1.4346.1.8.1.3.3';

/*session.set({ oid: oid , value: 1, type: 2 }, function (error, varbind) {
    var vb;
    if (error) {
        console.log(error.toString ());
    } else {
         vb = varbinds[0];
        console.log('The  is :"' + vb.value + '"');
        console.log('The set is done: ' + vb.value);
    }
    session.close();
});*/

session.set({ oid: oid, value: 0, type: 5 }, function (error) {
    if (error) {
        console.log(error.toString ());
    } else {
        console.log('The set is done.');
    }
    session.close();
});