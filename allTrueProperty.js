function truthCheck(collection, pre) {
  return collection.every(obj => Boolean(obj[pre]));
}