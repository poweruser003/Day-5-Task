//2. For the above JSON, iterate over all for loops:

//Iteration Using for loop:


for(var i=0;i<myResume.length;i++){
    console.log(myResume[i])
   }


//Using for-of loop:

Obj_Keys=Object.keys(myResume)
Obj_Entries=Object.entries(myResume)
for (const [key, value] of Object.entries(myResume)){
 console.log(`${key} : ${value}`);
}


//Using foreach loop:

Object.entries(myResume).forEach(([key, value]) => {
 console.log(`${key} : ${value}`)
})



//Using for in loop:

for(var i in myResume){
    console.log(myResume[i])
   } 






