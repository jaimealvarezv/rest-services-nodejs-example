const {Schema, model} = require('mongoose');


const LogSchema = Schema({
     msg: {
        type: String,
        required: [true, 'Log text  message is Required']
    },
   
},
{ timestamps: true });


// Overwrite method to delete password in response

module.exports = model ('Log', LogSchema);



