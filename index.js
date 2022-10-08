"ues strict"

const ps =require("prompt-sync")
const prompt =ps()

var count =2
var scull=0
var whileCondition = true
 var ran=Math.floor(Math.random()*count +1)
var no = ""
function pram() {  
 console.log(`${name}  try again pick number betwin 1 and ${count} `)
 no=prompt(`pick number betwin 1 and ${count} `)
}

let name=prompt ("enter your name")
while (whileCondition) {
  if(name){
  no=prompt(`${name} pick number betwin 1 and ${count} `)
  var newNo=Math.floor(no)
  if (ran===newNo){
   count ++
    scull++
    console.log( `${name} have gotten 1 p0nt you are naw in level ${count-1} and your pont is ${scull}`)
  }else{
   pram()
  }
  }else{
  console.log("enter your name")
    whileCondition = false
}
}