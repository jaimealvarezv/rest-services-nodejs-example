
const { request, response } = require ('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const usersGet = async (req, res = response) => {
    const {limit=5, from=0} = req.query;
    const query = {status:true};

    // const users = await User.find(query)
    //     .skip(Number(from))
    //     .limit(Number(limit));

    // const count = await User.countDocuments(query);

    const [count, users] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
    ])
    res.json({
        count,
        users
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


const usersPut = async (req, res = response) => {
    const {id} = req.params;
    const {password, google, email, ...rest}  = req.body;
    if (password) {
        // make the password hash
        const salt = bcryptjs.genSaltSync();
        rest.password=bcryptjs.hashSync(password, salt);
    }

    const user = await User.findByIdAndUpdate (id, rest);
    
    res.json({
       user
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
    usersPatch,
    

}