export const splitWord = (input, len = 80) => {
  if (!input) {
    return 'untitled';
  }

  if (input.length < len) {
    return input;
  }

  let curr = len;
  let prev = 0;

  while (input[curr]) {
    var cur = ++curr;
    if (input[cur] === ' ' || input[cur] === '.' || input[cur] === '/' || input.length === cur) {
      return input.substring(prev, curr);
    }
  }

  return input;
};
