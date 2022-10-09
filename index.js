"ues strict"

const ps =require("prompt-sync")
const prompt =ps()

var rang =2
var scull=0
var whileCondition = true
var no = ""
function pram() {  
 console.log(`${name}  try again pick number betwin 1 and ${rang} `)
 no=prompt(`pick number betwin 1 and ${rang} `)
}

let name=prompt ("enter your name")
while (whileCondition) {
  if(name){
  
  var ran=Math.floor(Math.random()*rang+1)
  no=prompt(`${name} pick number betwin 1 and ${rang} `)
  var newNo=Math.floor(no)
  if (ran===newNo){
   rang ++
    scull++
    console.log( `${name} have gotten 1 p0nt you are naw in level ${rang-1} and your pont is ${scull}`)
  }else{
   pram()
  }
  }else{
  console.log("enter your name")
    whileCondition = false
}
}