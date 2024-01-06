// function addTwoNum(number1, number2){
//     return number1 + number2;
// }

// let x = addTwoNum(5, 4);
// console.log(x);


function calculateCartPrice(val1, val2, ...num1){  //rest operator
    return num1;
}
// console.log(calculateCartPrice(200, 500, 300, 400)); 

//functions with objects

const obj=  {
    username: "hrishikesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(obj)
handleObject({
    username:"abc",
    price:100
})


// function with function

const arr = [200, 300, 400];

function handleArr(anyArray){
    console.log(anyArray[1]);
}

handleArr([
    1,2,3
]);