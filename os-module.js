const os=require('os')
//info about current user
const user=os.userInfo();
console.log(user)
//methods returns the system uptime in seconds
console.log(`the system Uptime is ${os.uptime()} seconds`)

const currenOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
