const {Schema, model} = require('mongoose');


const RoleSchema = Schema({
     role: {
        type: String,
        required: [true, 'Role name is Required']
    }

});

module.exports = model ('Role', RoleSchema);



