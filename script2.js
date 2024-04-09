//2. For the above JSON, iterate over all for loops:

//Using for loop:
var keys= Object.keys(myResume)
for(var i=0;i<keys.length;i++){
    console.log(keys[i]+":"+myResume[keys[i]])
  }

//Using for-of loop:
console.log("\n for of")
for (const [key, value] of Object.entries(myResume)){
 console.log(`${key} : ${value}`);
}


console.log("\n for each")

//Using foreach loop:
Object.entries(myResume).forEach(([key, value]) => {
 console.log(`${key} : ${value}`)
})

console.log("\n for in")

//Using for in loop:
for(var i in myResume){
   console.log(`${i} : ${myResume[i]}`)
    } 










