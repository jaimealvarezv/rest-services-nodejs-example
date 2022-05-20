const { Router } = require('express');
const { check } = require('express-validator');
const Role = require ('../models/role');
const { validateUserFields } = require('../middlewares/user-validation');
const { isRoleValid, emailExists, idExists } = require('../helpers/db-validators');

const { usersGet, 
        usersPost, 
        usersPut, 
        usersDelete, 
        usersPatch, 
        usersList} = require('../controllers/users');

const router = Router();


router.get('/', usersGet );

router.post('/', [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('email').custom( emailExists ),
        check('password', 'Password is mandatory and greater than 6 characters').isLength({min: 6}),
        //check('role', 'Invalid role').isIn(['admin_role', 'user_role']),
        check('role').custom( isRoleValid ),
        validateUserFields
], usersPost );

router.put('/:id',[
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('id', 'ID is not valid').isMongoId(),
        check('id').custom( idExists ),
        check('role').custom( isRoleValid ),
        validateUserFields
], usersPut );
router.delete('/:id', usersDelete );
router.patch('/', usersPatch );


module.exports = router;