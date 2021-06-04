function divBy2(number) {
  let stack = [];
  let str = "";
  while (number > 0) {
    let remainder = number % 2;
    stack.push(remainder);
    number = Math.floor(number / 2);
  }

  while (stack != null) {
    str += stack.pop();
  }

  return str;
}

divBy2(10);
