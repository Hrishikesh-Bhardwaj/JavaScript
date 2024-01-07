temp = 41;
if (temp === 41) {
    console.log(true);
}else{
    console.log(false);
}

//falsy values
// fase, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

// const emptyObj ={};
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }else{
//     console.log("object has value");
// }

//nullish coalescing operator (??):null undefined

let val = 5??10;
console.log(val);

let val2 = null??10;
console.log(val2);

let val3 = undefined??10;
console.log(val3);


let val6 = null??11??10;
console.log(val6);