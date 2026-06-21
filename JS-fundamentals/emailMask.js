function maskEmail(email) {
  const replacedStr = email.slice(1, (email.indexOf('@') - 1));
  const replacedLenght = replacedStr.length;
  const strToReplace = '*'.repeat(replacedLenght);
  return email.replace(replacedStr, strToReplace);
}

