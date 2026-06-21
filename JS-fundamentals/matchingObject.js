function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  return collection.filter(obj =>
    keys.every(key => obj[key] === source[key])
  );
}