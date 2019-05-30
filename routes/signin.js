// const loginRoutes = require('express').Router();
// let User = require('../models/User');
// let UserSess = require('../models/UserSessions');

// module.exports = app => {
    
//     loginRoutes.route('/account/signup').post((req, res, next)=>{
//         const { body } = req;
//         let { userName, firstName, lastName, email, password } = body;
//         if(!userName) {
//             return res.send({
//                 success: false,
//                 message: 'error'
//             });
//         }
//         if(!firstName) {
//            return res.send({
//                 success: false,
//                 message: 'error'
//             });
//         }

//         if(!lastName) {
//            return res.send({
//                 success: false,
//                 message: 'error'
//             });
//         }

//         if(!email) {
//             return res.send({
//                 success: false,
//                 message: 'error'
//             });
//         }

//         if(!password) {
//            return res.send({
//                 success: false,
//                 message: 'error'
//             });
//         }

//         email = email.toLowerCase();

//         User.find({ email: email }, (err, previousUsers) => {
//             if(err) {
//                 return res.send('errors: server err');
//             } else if(previousUsers.length > 0) {
//                return res.send('error: account already exist');
//             }
//             const newUser = new User();

//             newUser.email = email;
//             newUser.firstName = firstName;
//             newUser.lastName = lastName;
//             newUser.password = newUser.generateHash(password);
//             newUser.save((err, user)=>{
//                 if (err) {
//                     return res.send({
//                         success: false,
//                         message: 'error: server error'
//                     });
//                 }
//                 return res.send({
//                     success: true,
//                     message: 'signed up'
//                 });
//             });
        
//     });
// });
// app.use('/api', loginRoutes);
// }

    
    
