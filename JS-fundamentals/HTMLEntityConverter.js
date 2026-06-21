function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  let result = "";

  for (const char of str) {
    result += entities[char] || char;
  }

  return result;
}