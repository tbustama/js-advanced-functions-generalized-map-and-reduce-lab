// Add your functions here
function map(arr, fun) {
  return arr.map(fun);
}

function reduce(arr, start = null) {
  if (start) {
    let temp = arr.reduce(start);
    return temp(start) + start;
  } else {
    return arr.reduce(start);
  }
}
