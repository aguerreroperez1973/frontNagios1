//import vitePluginRequire from "vite-plugin-require";
//import { require } from 'vite-plugin-require'
const { exec } = require("child_process");
//const commandSet = "snmpset -v 2c -c MEL-Seguridad-Mineroducto-RW 192.168.0.240  .1.3.6.1.4.1.4346.1.8.1.3.3 i 1"
const commandGet = "snmpwalk -v 2c -O n -c MEL-Seguridad-Mineroducto-RW 192.168.0.240  .1.3.6.1.4.1.4346.1.8.1.3.3"

exec(commandGet, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
