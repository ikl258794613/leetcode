function moveZero(array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] == 0) {
      array.splice(i, 1);
      array.push(0);
    }
  }
  return array;
}
moveZero([0, 1, 2, 0, 3, 0]);
