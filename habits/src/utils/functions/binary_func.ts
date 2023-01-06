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

// function Consistency(json) {
//   let arr_length = json.length;
//   let consistencyy = (Streak(json) / arr_length) * 100;
//   consistencyy = Math.round((consistencyy + Number.EPSILON) * 100) / 100;
//   return consistencyy;
// }

// function targetCompleted(json) {
//   return Consistency(json);
// }

// function Score() {
//   let score;
//   score = (Streak(json) + Consistency(json)) / 2;
//   return score;
// }

// //
// export {};
export {}