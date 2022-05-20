const { Router } = require('express');
const { check } = require('express-validator');
const Log = require ('../models/log');

const { logsGet, 
        logsPost, 
        logsPut
        } = require('../controllers/logs');

const router = Router();


router.get('/', logsGet );
router.post('/', logsPost );
router.put('/', logsPut );

module.exports = router;