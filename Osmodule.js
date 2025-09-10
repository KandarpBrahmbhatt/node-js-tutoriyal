const os = require('os');

//1. get os platform and UserInfo
// return operating system platform
console.log("Platform",os.platform())
console.log("User",os.userInfo())

// 2.get os CPU architeture

console.log("CPU architeture", os.arch());

// 3 get a free syastem memory

console.log("free memory",os.freemem(),"bytes")

// 4. get totle memory

console.log("Total memory",os.totalmem(),"bytes")

// 5. get System Uptime

console.log("System Uptime",os.uptime(),"seconds")

// 6. get home diorectory 
console.log("home diorectory",os.homedir())

//7. get host name

console.log("Host name",os.hostname())

//8 get tempory diorectory
console.log("get tempory diorectory",os.tmpdir())

//9  get cpu information
console.log("get cpu infpormation",os.cpus())

// 10 system name 

console.log("opeating system",os.type())