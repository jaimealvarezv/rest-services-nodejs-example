const {Schema, model} = require('mongoose');


const UserSchema = Schema({
     name: {
        type: String,
        required: [true, 'Name is Required']
    },

    email: {
        type: String,
        required: [true, 'email is Required'],
        unique: true
    },
    
    password: {
        type: String,
        required: [true, 'Password is Required']
    },

    img: {
        type: String
    },

    role: {
        type: String,
        required: [true, 'eMail is Required'],
        enum: ['admin_role', 'user_role']
    },

    status: {
        type: Boolean,
        default: true
    },

    google: {
        type: Boolean,
        default: false
    },


});

// Overwrite method to delete password in response

UserSchema.methods.toJSON = function () {
    const {__v, password, ...user } = this.toObject();
    return user;
}

module.exports = model ('User', UserSchema);



