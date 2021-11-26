// const title = [
//     {
//         id:1,
//         name:'Asadaaa',
//         status:'Students',
//     }

// ];

// a =0;
// s = 0;
// for (let i = 0; i < title.length; i++) {
// NewNAme = title[0].name;

// NewStatus = title[0].status;


// for (let j = 0; j < NewNAme.length; j++) {

//     (NewNAme[j] === 'a' || NewNAme[j] === 'A') && a++;



// }

// for (let k = 0; k < NewStatus.length; k++) {


//     (NewStatus[k] === 's' || NewStatus[k] === 'S') && s++;


// }

// }

// console.log(a,'=a');
// console.log(s,'=s');

// const title = [
//     {
//         id:1,
//         name:'Asadaaa',
//         status:'Students',
//     }

// ];

//   a = 0;
//   const obj = Object.values(title[0]).toString()

//   for (let i = 0; i < obj.length; i++) {
//     (obj[i] === 'a' || obj[i] === 'A') && a++;
//   }

//   console.log('a =', a);

let arr ='AAAADDFFFGGTAAYOOOLKKKKMH';
let arr2=Array.from(arr);
let a=arr2[0];
let s=1;
let str='';
for (let i = 0; i < arr2.length; i++) {
    if(a===arr2[i+1]){
        s++;
    }
    else{
        str=str+(s+arr2[i]);
        s=1;
        a=arr[i+1];
    }
}

let str2='';
let b=str;
let b2=Array.from(b);
for (let i = 0; i < b2.length; i++) {
    if(+(b2[i])===1){
        b2[i]='';
    }
    str2=str2+b2[i];
}
console.log(str2);