function getRandomNum() {
  return Math.round(Math.random() * (71 - 0 + 1) + 0);
}

function generatePassword(passLength) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < passLength; i++){
    password += chars[getRandomNum()];
  }
  return password;
}
const password = generatePassword(8);
console.log(`Generated password: ${password}`);