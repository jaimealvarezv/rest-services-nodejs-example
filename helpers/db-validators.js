
 const Role = require('../models/role');
 const User = require('../models/user');

const isRoleValid = async (role ='' ) => {
    const roleExists = await Role.findOne({role});
    if (!roleExists){
        throw new Error(`Role: ${role} is not created into the database`);
    }
    
}

const emailExists = async ( email ) => {
    const emailExists = await User.findOne({email});
    if (emailExists){
        throw new Error(`email: ${email} already exists into the database`);
    }
    
}

module.exports = {
    emailExists,
    isRoleValid
}