const Service = require("../models/serviceModel");
const Mechanics = require('../models/mechanicsModel');

exports.getAllMechanics = async (req, res)=>{
    try{
        const queryObj = {...req.query};
        const excludedFields = ["sort", "limit", "fields"];
        excludedFields.forEach(el=>delete queryObj[el]);

        let queryString = JSON.stringify(queryObj);
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match=>`$${match}`)
        console.log(JSON.parse(queryString))

        let query = Mechanic.find(JSON.parse(queryString))

        if(req.query.sort){
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        }else{
            query = query.sort("-createdAt");
        }
        if(req.query.fields){
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        }
        const mechanics = await query;
        res.status(200).json({
            status: "success",
            results: mechanics.length,
            data:{
                mechanics
            }
        })
    }catch(error){
        console.log(error)
    }
    }

exports.createMechanic = async (req, res) =>{
try {
    const serviceName = req.body.service
    const existingService = await Service.findOne({name: serviceName});

    if (!existingService) {
        return res.status(400).json({
            status: 'fail',
            message: 'Service does not exist'
        });
    }

    const mechanic = await Mechanic.create(req.body);
    res.status(201).json({
        status: 'success',
        data: mechanic
    });
} catch (err) {
    res.status(400).json({
        status: 'fail',
        message: err.message
    });
}
};

exports.getMechanicById = async (req, res)=>{
    const mechanic = await Mechanic.findById(req.params.id).populate("service");
    if(!mechanic){
        return res.status(404).json({
            status: "failed",
            message: "Invalid id"
        })
    }
    res.status(200).json({
        status: "success",
        data:{
            mechanic
        }
    })
}

exports.updateMechanic = async (req, res)=>{
    try{
        const mechanic = await Mechanic.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
    });
    res.status(200).json({
        status: "success",
        data:{
            mechanic: "Updated"
        }
    })
    } catch(error){
        res.status(404).json({
            status: "fail",
            message: error
        })
    }
    
}

exports.deleteMechanic = async (req, res)=>{
    try{
        await Mechanic.findByIdAndDelete(req.params.id)
    }catch(error){
        console.log(error)
    }
    res.status(200).json({
        status: "success",
        data:{
            mechanic: null
        }
    })
}