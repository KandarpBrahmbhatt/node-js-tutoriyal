import readline  from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos = [];

const showMenu = () =>{
    console.log("\n Add a Task")
    console.log("2. View a Task")
    console.log("3. exit")
    rl.question("Choose an option: ",handleInput)
}
const handleInput = (option) =>{
    
if(option==="1"){
    rl.question("Enter the Task :",(task)=>{
         todos.push(task)
         console.log("Task added: ",task)
         showMenu()
    })
} else if(option ==="2"){
    console.log("\n Your Todo Lists")
    todos.forEach((task,index)=>{
        console.log(`${index+1}.${task}`)
    })
    showMenu()
} else if(option ==="3"){
    console.log("Good Byee")
    rl.close()
} else{
    console.log("Invalid option please Try again")
    showMenu()
}
}
showMenu()
