// import EventEmitter class
const EventEmitter = require('events')

// create an instance of EventEmitter
const emitter = new EventEmitter()

// 1.Define an Event listener (addListener)
emitter.addListener("greet",() =>{
    console.log(`hello kandarp brahmbhatt`)
})

// 2.Trigger (emit) the "greet" event
emitter.emit("greet")   // aa emit ae method 6e jema greet ne call kari 6e.
 
// you can also pass arguments while emitting

emitter.addListener("name",(username)=>{  
    console.log(`hello ${username}`)
})

emitter.emit('name',"kyb")  // aarite bija parameter pan pass kari sakiye chiye.


// but it's best idea to take a single argument as an object 

emitter.addListener("two",(arg)=>{
    console.log(`hello ${arg.username} you are a  ${arg.prof},ri8`)  // 2 para meter ek sathe aa rite add thase.
})
emitter.emit("two",{username:"gotu",prof:"full stack dev"})