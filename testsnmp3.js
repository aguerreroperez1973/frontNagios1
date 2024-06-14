//var snmp = require('snmp-native');
import snmp from 'snmp-native';
const host = '192.168.1.82';
const community = 'public';
const session = new snmp.Session({ host: host, community: community });
const oid = ".1.3.6.1.2.1.1.1.0";

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
