const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc, curVal){
//     console.log(`acc ${acc} and curVal ${curVal}`);
//     return acc + curVal
// }, 0)

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0)


// console.log(myTotal);


const shopCart = [
    {
        itemName: 'js course',
        price: 299
    },
    {
        itemName: 'java',
        price: 399
    },
    {
        itemName: 'mern',
        price: 599
    },
    {
        itemName: 'DSA',
        price: 899
    }
]

const total = shopCart.reduce((acc, item) => acc + item.price, 0 )
console.log(total);

