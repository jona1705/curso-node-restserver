const {response} = require('express');

const usuariosGet = (req, res = response) => {
    
    const {q, nombre = 'No name', apikey, limit, page=1} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        limit, 
        page 
    });
}

const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;
    res.status(201).json({
        msg: 'post API - controlador',
        nombre, 
        edad
    })
}

const usuariosPut = (req, res = response)  => {
    
    const id =  req.params.id;
    res.json({
        msg: 'put API - controlador',
        id
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}