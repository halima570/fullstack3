const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
    excludeSimilarCharacters: true
  });

  console.log(`Your random password is: ${password}`);
}

generateRandomPassword();