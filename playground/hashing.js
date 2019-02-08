const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});


// var data = {
//     id: 4
// };
//
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecghret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// }
// else {
//     console.log('Data changed fuck off');
// }