import require from 'vite-plugin-require'
//var snmp = require('snmp-native');
import snmp from 'snmp-native';
const host = '192.168.0.240';
const community = 'MEL-Seguridad-Mineroducto-R';
const session = new snmp.Session({ host: host, community: community });
const oid = ".1.3.6.1.4.1.4346.1.8.1.3.3";

session.get({ oid: oid }, function (err, varbinds) {
    var vb;
    if (err) {
        console.log(err);
    } else {
        vb = varbinds[0];
        console.log('The system description is :"' + vb.value + '"');
    }
    session.close();
});
