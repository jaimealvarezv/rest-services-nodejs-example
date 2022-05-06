
const { request, response } = require ('express');

const usersGet = (req = request, res = response) => {
    
    const {q, name='Jhon', lastName='Doe'} = req.query;

    res.json({
        msg: 'Method: GET,  route: /api/users  controller',
        q,
        name,
        lastName
    });
}

const usersPost = (req, res = response) => {
    
    const {name, lastName}  = req.body;
   // console.log(req);
    res.json({
        msg: 'Method: POST,  route: /api/users  controller',
        name,
        lastName
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