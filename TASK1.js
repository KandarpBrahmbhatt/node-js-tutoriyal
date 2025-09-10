const EventEmitter = require("events")
const emitter = new EventEmitter()


const eventCounts = {
    "user-login":0,
    "user-logout":0,
    "user-purchese":0,
    "profile-update":0,
}
emitter.addListener("user-login",(username)=>{
    console.log(`${username} logged in!`)
    eventCounts["user-login"]++
})
emitter.addListener("user-purchese",(username,item)=>{
    console.log(`${username} purchese ${item}`)
    eventCounts["user-purchese"]++
})
emitter.addListener("profile-update",(username,field)=>{
    console.log(`${username} Updated their ${field}`)
    eventCounts["profile-update"]++
})
emitter.addListener("user-logout",(username) =>{
    console.log(`${username} logged out!`)
    eventCounts["user-logout"]++
})


emitter.on("summery",()=>{
    console.log(eventCounts)
})


// jetali var call karishu aetalo var number count thai aavase.
emitter.emit("user-purchese","kyb","leptop")
emitter.emit("profile-update","kyb","email")
emitter.emit("user-logout","kyb")

emitter.emit("user-purchese","kyb","leptop")
emitter.emit("profile-update","kyb","email")
emitter.emit("user-logout","kyb")

emitter.emit("user-login","kyb")
emitter.emit("user-purchese","kyb","leptop")
emitter.emit("profile-update","kyb","email")

emitter.emit("user-login","kyb")
emitter.emit("profile-update","kyb","email")
emitter.emit("user-logout","kyb")

// show the summery
emitter.emit("summery")