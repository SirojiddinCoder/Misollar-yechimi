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

const title = [
    {
        id:1,
        name:'Asadaaa',
        status:'Students',
    }

];

  a = 0;
  const obj = Object.values(title[0]).toString()

  for (let i = 0; i < obj.length; i++) {
    (obj[i] === 'a' || obj[i] === 'A') && a++;
  }

  console.log('a =', a);