//let numbersUpdated = [];
function getOdds(numbers) {
  let numbersUpdated = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      numbersUpdated.push(numbers[i]);
    }
  }
  return numbersUpdated;
}
getOdds([4, 2, 5, 3]);
/*console.log(numbersUpdated);*/

//===============================================================//

//let numbersUpdated2 = [];
function getEvens(numbers2) {
  let numbersUpdated2 = [];
  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
      numbersUpdated2.push(numbers2[i]);
    }
  }
  return numbersUpdated2;
}
getEvens([4, 2, 5, 3]);
/*console.log(numbersUpdated2);*/
//===============================================================//

//let count = 0;
function getDuplicateCount(x, numbers3) {
  let count = 0;
  for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] === x) {
      count++;
    }
  }
  return count;
}
getDuplicateCount(7, [4, 5, , 5, 2, 5, 3]);
/*console.log(count);*/

//===============================================================//

function youGottaCalmDown(s) {
  let newS = Array.from(s);
  let count2 = 0;
  for (let i = newS.length - 1; i > 0; i--) {
    if (newS[i] === "!") {
      count2++;
      if (count2 > 1) {
        newS.pop(s[i]);
      }
    }
  }
  let s2 = newS.join("");
  return s2;
}

youGottaCalmDown("hello!");
/*console.log(s2);*/

module.exports = { getOdds, getEvens, getDuplicateCount, youGottaCalmDown };
