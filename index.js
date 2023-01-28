// Auth Friday Workshop Week 3

// Importing the crypto module from node core library. Here we are using the createHash method to create a hash object. We are then using the update method to update the hash object with the password. We are then using the digest method to create a hexidecimal hash of the password. We are then logging the hashed password to the console.

// const crypto = require('node:crypto');

// const password = 'hunter2';

// const hashed = crypto.createHash('sha256').update(password).digest('hex');

// console.log(hashed);

// Importing the bcryptjs module from npm. Here we are using the hash method to create a hash of the password. We are then logging the hashed password to the console. The second argument is the number of rounds to use when hashing the password. The higher the number the more secure the password will be. The default is 10. The maximum is 31. The higher the number the longer it will take to hash the password.

const bcryptjs = require('bcryptjs');

const password = 'hunter2';

const cost = 12;

// bcryptjs.hash(password, 12).then((hash) => console.log(hash));

// Importing the bcryptjs module from npm. Here we are using the hash method to create a hash of the password. We are then using the compare method to compare the password to the hash. We are then logging the result to the console. The result will be true if the password matches the hash and false if it does not. The compare method is asynchronous so we need to use the then method to get the result. We can also use the async/await syntax.

bcryptjs.hash(password, cost).then((hash) => {
  bcryptjs.compare('hunter2', hash).then((result) => console.log(result));
  // true
  bcryptjs.compare('incorrect', hash).then((result) => console.log(result));
  // false
});
