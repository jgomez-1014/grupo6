

app.post("./altagenero", (req, res) =>{
  
  const { titulo, artista, genero, puntuacion } = req.body

  //Validacion basica
  if (titulo == "" || artista == "" || genero == "") {

    let validacion = "Por favor ingrese su Cancion, Artista y Genero";

    res.render("altagenero", { validacion })
  }
  else {

   /* conectar la DB */

    let data = {
      tituloDB: titulo,
      artistaDB: artista,
      generoDB: genero,
      puntucionDB: puntuacion,
    }


    let sql = "INSERT INTO tablaGrupo6 SET ?";

    let query = conexion.query(sql, data, (err, results) => {
      if (err) throw err;
      /* res.render("contacto") */
    })

  }

});