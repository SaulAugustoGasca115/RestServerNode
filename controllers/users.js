const {response,request} = require('express')

const getUsers = (req = request,res = response) => {

    const {name = "MATTHEWS",age=0} = req.query;

    res.json({
        message:"GET NODE API REST - Controller",
        name,
        age
    })
}

const postUsers = (req = request,res = response) => {

    //const body = request.body
    const {name,age} = req.body

    res.json({
        message:"POST NODE API REST - Controller",
        name
    })
}

const putUsers = (req = request,res = response) => {

    //const id = request.params.id
    const {id} = req.params

    res.json({
        message:"PUT NODE API REST - Controller",
        id
    })
}

const deleteUsers = (req = request,res = response) => {
    res.json({
        message:"DELETE NODE API REST - Controller"
    })
}

const patchUsers = (req = request,res = response) => {
    res.json({
        message:"PATCH NODE API REST - Controller"
    })
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
}