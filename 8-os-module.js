const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(`The system uptime is ${os.uptime()}`)
const getTime = os.uptime();
console.log(getTime/3600);
//get some infos about the os
const currentOS = {
    name: os.platform(),
    release: os.release(),
    TotalMem: os.totalmem(),
    FreeMem: os.freemem()
}
console.log(currentOS);