function queue(player, number) {
  let q = [];
  for (let i = 0; i < player.length; i++) {
    q.push(player[i]);
  }
  while (q.length > 1) {
    for (let i = 0; i < number - 1; i++) {
      q.push(q.shift());
    }
    q.shift();
  }
  return q;
}
queue(["a", "b", "c", "d", "e", "f"], 3);
