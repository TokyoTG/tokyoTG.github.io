function modulusCollector(num) {
  let i = 1;
  let result = "";
  let arr = [];
  if (num < 1) {
    return arr;
  }
  if (typeof num === "string") {
    return "Error, please enter a number";
  }
  while (i <= num) {
    if (i % 2 == 0) {
      result = "yu";
    }
    if (i % 3 == 0) {
      result = "gi";
    }
    if (i % 5 == 0) {
      result = "oh";
    }
    if (i % 2 == 0 && i % 3 == 0) {
      result = "yu-gi";
    }
    if (i % 2 == 0 && i % 5 == 0) {
      result = "yu-oh";
    }
    if (i % 3 == 0 && i % 5 == 0) {
      result = "gi-oh";
    } else if (result == "") {
      result = i;
    }
    arr.push(result);
    i++;
    result = "";
  }
  return arr;
}

modulusCollector(100);
modulusCollector(500);
