const {Router} = require('express');
const { usuariosGet, usuariosPost, usuariosDelete, usuariosPatch, usuariosPut } = require('../controllers/usuarios');

const router = Router();

/*router.get('/', (req, res) => {
    res.json({
        //'Hello World'
        //ok: true,
        // Enviar ok es redundante ya tenemos el status 200 OK
        msg: 'get API'
    })
});*/

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router