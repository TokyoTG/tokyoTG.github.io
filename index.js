// * If the principal is greater than or equal to 2500 and the time is greater than 1 and less than 3, then rate = 3

// * If the principal is greater than or equal to 2500 and the time is greater than or equal to 3, then rate = 4

// * If the principal is less than 2500 or the time is less than or equal to 1, then rate = 2

// * Otherwise, rate = 1;

// Calculate the interest for each individual object using the formula: (principal * rate * time) / 100.

// The function should return an array of objects called
// 'interestData' and each individual object should have 'principal', 'rate', 'time' and 'interest' as keys with their corresponding values.

// Log the 'interestData' array to console BEFORE your return

const principals = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 },
];

function interestCalculator(arr) {
  let interestData = [];
  for (let item of arr) {
    if (item.principal >= 2500 && item.time > 1 && item.time < 3) {
      item.rate = 3;
      item.interest = (item.principal * item.time * item.rate) / 100;
    } else if (item.principal >= 2500 && item.time >= 3) {
      item.rate = 4;
      item.interest = (item.principal * item.time * item.rate) / 100;
    } else if (item.principal < 2500 || item.time <= 1) {
      item.rate = 2;
      item.interest = (item.principal * item.time * item.rate) / 100;
    } else {
      item.rate = 1;
      item.interest = (item.principal * item.time * item.rate) / 100;
    }
    interestData.push(item);
  }
  console.log(interestData);
  return interestData;
}
