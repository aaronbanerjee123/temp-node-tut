const os = require('os');

//info on current user
const user = os.userInfo();

// returns system uptime
console.log(`The system up time is ${os.uptime()} seconds`);


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);