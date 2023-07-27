const os = require ('os')

// info about current user
const user =os.userInfo()

console.log(user)

// methods return sys up time in seconds

const upTime = os.uptime()
console.log(`The system uptime is ${upTime/3600} hours`)
const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS)