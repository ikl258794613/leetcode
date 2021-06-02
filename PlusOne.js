function PlusOne(array) {
  let carry = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    array[i] = array[i] + carry;
    if (i == array.length - 1) {
      array[i]++;
    }

    if (array[i] == 10) {
      array[i] = 0;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (carry == 1) {
    array.unshift(1);
  }
  return array;
}

PlusOne([1, 2, 3, 4, 5, 9]);
