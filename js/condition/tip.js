let payment1 = 3_000,
  payment2 = 27_500,
  payment3 = 100_000;

let tip1 =
  payment1 >= 5_000 && payment1 <= 30_000 ? payment1 * 0.15 : payment1 * 0.2;
let tip2 =
  payment2 >= 5_000 && payment2 <= 30_000 ? payment2 * 0.15 : payment2 * 0.2;
let tip3 =
  payment3 >= 5_000 && payment3 <= 30_000 ? payment3 * 0.15 : payment3 * 0.2;

console.log("Food: ", payment1, "\tTip:", tip1, "\tTotal:", payment1 + tip1);
console.log("Food: ", payment2, "\tTip:", tip2, "\tTotal:", payment2 + tip2);
console.log("Food: ", payment3, "\tTip:", tip3, "\tTotal:", payment3 + tip3);
