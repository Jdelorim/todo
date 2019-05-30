    
const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
    // firstName: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // lastName: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // password: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    // isDeleted: {
    //     type: Boolean,
    //     default: false
    // }
});

// UserSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.validatePassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('Users', UserSchema);