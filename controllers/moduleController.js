const asyncHander = require("express-async-handler");
//@desc Get Modules
//@route GET /api/modules
//@access public

const getModules = asyncHander(async (req, res)=>{
    res.status(200).send({message:"Get all modules"});
});

//@desc Get Module
//@route GET /api/modules/id
//@access public

const getModule = asyncHander(async (req, res)=>{
    res.status(200).send({message:`Get module ${req.params.id}`});
});

//@desc Create Module
//@route POST /api/modules/
//@access public

const createModule = asyncHander(async (req, res)=>{
    console.log('The body contains :', req.body);
    //destructure the body of the request
    const {code, name, level} = req.body;
    if(!code || !name || !level){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).send({message:"Create one modules"});
});

//@desc Update Module
//@route PUT /api/modules/id
//@access public

const updateModule = asyncHander(async (req, res)=>{
    res.status(200).send({message:`Update module ${req.params.id}`});
});

//@desc Delete Module
//@route DELETE /api/modules/id
//@access public

const deleteModule = asyncHander(async (req, res)=>{
    res.status(200).send({message:`Delete module ${req.params.id}`});
});

module.exports = {
    getModule, 
    getModules, 
    createModule, 
    updateModule, 
    deleteModule
};