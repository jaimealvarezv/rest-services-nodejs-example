
const { request, response } = require ('express');

const Log = require('../models/log');

const logsGet = async (req, res = response) => {
    const body = req.body;
    
    res.json({
        body
    });
}


const logsPost = async (req, res = response) => {
   
   
    const body = req.body;
    const log=new Log(body);
    
    try {
        await log.save();
    } catch (error) {
        console.log(error)
        throw new Error ("Error on saving new log entry");
    }

    res.json({
        body
    });
}


const logsPut = async (req, res = response) => {
    const body = req.body;
   
    res.json({
       body
    });
}


module.exports = {
    logsGet, 
    logsPost,
    logsPut
}