const { Router } = require('express');
const router = Router();
const { 
    seleccionarGenero,
    listarGeneros,
    guardarGenero
} = require('../controllers/generoController')


//router.get('/generos', seleccionarGenero);
//router.get('/listargenero', listarGeneros);
//router.post('/altagenero', guardarGenero)

//router.get('../views/generos', seleccionarGenero)

/* router.get('/altagenero', (req, res) =>{
    res.send(`seleccionarGenero`)
    console.log('seleccionarGenero')    
    res.render('altagenero', {titulo: 'Alta de generos'})
}); */

router.get('/', function(req, res, next) {
    res.render('altagenero', { titulo: 'Ingresa tu musica favorita' });
  });

module.exports = router;
