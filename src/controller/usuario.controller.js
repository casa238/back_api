const { Collection } = require("mongodb");

const usuarioCtrl = {};
const Usuario = require('../model/usuario.model')

usuarioCtrl.getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios);
    } catch (error) {
        console.log(error);
    }    
};

usuarioCtrl.getUsuario = async (req, res) => {
    try {
        const usuarios = await Usuario.find({cedula:req.params.cedula});
        res.json(usuarios);
    } catch (error) {
        console.log(error);
    }    
};

/*forma inicial de obtener una respuesta del servidor
    usuarioCtrl.getUsuario = async (req, res) => {
     res.send
     ("GetUsuario") };*/

usuarioCtrl.createUsuario = async (req, res) => {
    try {
        const usuarioTemp = {
            iduser: req.body.iduser,
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            // apellido: req.body.apellido,
            username: req.body.username,
            password: req.body.password,
            // direccion: req.body.direccion,
            // telefono: req.body.telefono
        };

        let _usuario = new Usuario(usuarioTemp);
        await _usuario.save();
        res.send("creado")

    }catch (error) {
        console.log(error);
    }    
};

/*forma inicial de obtener una respuesta del servidor
    usuarioCtrl.createUsuario = async (req, res) => {
    res.send
    ("CreateUsuario") }; */

    usuarioCtrl.editUsuario = async (req, res) => {
    try {
        const usuarioTemp = {
            iduser: req.body.iduser,
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            // apellido: req.body.apellido,
            username: req.body.username,
            password: req.body.password,
            // direccion: req.body.direccion,
            // telefono: req.body.telefono
        };
        

        await Usuario.updateOne({cedula:req.params.cedula},usuarioTemp);
        res.send("Actualizado");

    }catch (error) {
        console.log(error);
    }    
};

/*forma inicial de obtener una respuesta del servidor
usuarioCtrl.editUsuario = async (req, res) => {res.send
    ("EditUsuario") };*/

usuarioCtrl.deleteUsuario = async (req, res) => {
    try {
        await Usuario.deleteOne({ cedula: req.params.cedula });
        res.send("Eliminado Correctamente");

    }catch (error) {
        console.log(error);
    }    
};

/*forma inicial de obtener una respuesta del servidor
usuarioCtrl.deleteUsuario = async (req, res) => {
    res.send
    ("DeleteUsuario") };*/
   

module.exports = usuarioCtrl;