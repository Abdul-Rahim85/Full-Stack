function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  const result = [];

  for (const base of str) {
    result.push([base, pairs[base]]);
  }

  return result;
}