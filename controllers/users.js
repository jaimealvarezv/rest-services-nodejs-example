
const { request, response } = require ('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user');
const bcrypt = require('bcryptjs/dist/bcrypt');


const usersGet = (req = request, res = response) => {
    
    const {q, name='Jhon', lastName='Doe'} = req.query;

    res.json({
        msg: 'Method: GET,  route: /api/users  controller',
        q,
        name,
        lastName
    });
}

const usersPost = async (req, res = response) => {
   
    //const {name, lastName}  = req.body;
    const {name, email, password, role} = req.body;
    const user=new User({name, email, password, role});
    
    // make the password hash
    const salt = bcryptjs.genSaltSync();
    user.password=bcryptjs.hashSync(password, salt);

    try {
        await user.save();
    } catch (error) {
        console.log(error)
        throw new Error ("Error on save new user");
    }

    res.json({
        user
    });
}


const usersPut = (req, res = response) => {
    res.json({
        msg: 'Method: PUT,  route: /api/users  controller'
    });
}

const usersDelete = (req, res = response) => {
    
    res.status(200).json({
        msg: 'Method: DELETE,  route: /api/users  controller'
    });

}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'Method: PATCH,  route: /api/users  controller'
    });
}


module.exports = {
    usersGet, 
    usersPost,
    usersPut,
    usersDelete,
    usersPatch

}