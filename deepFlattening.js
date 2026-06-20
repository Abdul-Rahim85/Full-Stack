function steamrollArray(arr) {
  const result = [];

  function flatten(array) {
    for (const item of array) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  }

  flatten(arr);
  return result;
}