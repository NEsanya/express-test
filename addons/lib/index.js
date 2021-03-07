var addon = require('../native');

const hash = addon.hash("password")

console.log(hash)
console.log(addon.verify("password1", hash));