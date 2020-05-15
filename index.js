// Add your functions here

function map(array, callback) {
  let output = [];
  for (const element of array) {
    output.push(callback(element));
  }
  return output;
}

function reduce(array, callback, startPoint = 0) {
  let output = array[0];
  output += startPoint ? startPoint : 0;
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    output = callback(element, output);
  }

  return output;
}

reduce([1, 2, true, "razmatazz"], function (a, memo) {
  return !!a && !!memo;
});
