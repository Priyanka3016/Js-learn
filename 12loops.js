for (let i = 0; i <= 3; i++) {
for(let j=0;j<3;j++){
    if(i==3&&j==1)
    {console.log('continue');
    continue;
    }
    console.log(`j==${j} hi`);
}

    console.log(`i==${i}priyanka`);
}


//while and do while loop same as c++
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}
//array specific loop

[{},{}]//array of object

//for of loop




//can be ablied on any data structure like array,object, string
const arr= [1,3,5,6];
let sum=0;
for (const num of arr) {
    sum+=num;
}
console.log(sum);
//
const map=new Map();
