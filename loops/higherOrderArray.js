const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const str = "Hrishikesh"
for (const elem of str) {
    // console.log(elem);
}


// maps

const map = new Map()
map.set('IN', 'India');
map.set('US', 'USA');
map.set('FR', 'france');

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':', value);
    
}

const obj = {
    'game1':'gta',
    'game2':'cricket',
    'game3':'IGI'
}
//for of doesn't work for the object

for (const key in obj) {
//    console.log(`${key} shortcut is for ${obj[key]}`);
}



const arr1 = ['js', 'java', 'react', 'rust', 'python']

// arr1.forEach(function(elem){
//     console.log(elem);
// })

arr1.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});


const myCoding = [
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"rust",
        languageFileName:"rs"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
});