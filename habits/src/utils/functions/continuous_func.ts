// let json = require("./dataset/data_numeric.json");

// function Streak(json) {
//   let count = 0;
//   json.map((j) => {
//     if (j.value > 0) {
//       count++;
//     }
//   });
//   return count;
// }
// function valueCount(json){
//     let count = 0;
//     json.map((j) => {
//     count+=j.value;
//   });
//   return count;
// }


// function Consistency(json) {
//   let arr_length = json.length;

//   let consistencyy = (Streak(json) / arr_length) * 100;
//   consistencyy = Math.round((consistencyy + Number.EPSILON) * 100) / 100;
//   return consistencyy;
// }

// function targetCompleted(json,target:number) {
//     let tarComp = (valueCount(json) / target) * 100;
//     tarComp = Math.round((tarComp + Number.EPSILON) * 100) / 100;
//     return tarComp;
// }   
// console.log(targetCompleted(json,3000));

// function Score(json,target:number) {
//   let score;
//   score = (Streak(json) + Consistency(json) + targetCompleted(json,target)) / 3;
//   return score;
// }

// //
// function Growth(json) {
//     let gro = ((json[json.length-1].value-json[0].value)/-json[0].value)*100;
//     gro = Math.round((gro + Number.EPSILON) * 100) / 100;
//     return gro;
// }
// export{
//     Streak,
//     valueCount,
//     Consistency,
//     targetCompleted,
//     Growth,
// }
export {}