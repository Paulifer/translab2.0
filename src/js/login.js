//BOTONES
//boton registrate despliga el registro de usuarios nuevos
 const btnRegistro = registrate.addEventListener('click', ()=>{
 		pagLogin.classList.remove('divDisplayBlock');
		pagLogin.classList.add('divDisplayNone');
		containerRegistrate.classList.remove('divDisplayNone');
		containerRegistrate.classList.add('divDisplayBlock');
})

//boton iniciar secion para desplegar menu, y chequea que sea un usuario registrado
const btnIniciar = btnIni.addEventListener('click', ()=>{
	let validarMail = correo.value;
  let valiarPassword = contrasena.value;
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(validarMail)) {
    firebase.auth().signInWithEmailAndPassword(validarMail, valiarPassword)
      .then(() => {
        console.log("usuarioExistente");
        pagLogin.classList.remove('divDisplayBlock');
				pagLogin.classList.add('divDisplayNone');
				containerMenu.classList.remove('divDisplayNone');
				containerMenu.classList.add('divDisplayBlock');
      })
      .catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    alert("correcto");
  } else {
    alert("incorrecto");
  }
  console.log(validarMail);
  console.log(valiarPassword);
	})

//boton registrarme guarda a nuevo usurio en firebase
const btnRegistroOk = registroOk.addEventListener('click', ()=>{
		let emailRegistry = mailregistro.value;
    let passwordRegistry = passregistro.value;
    
     if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailRegistry)) {
 		console.log(emailRegistry);
    console.log(passwordRegistry);
    firebase.auth().createUserWithEmailAndPassword(emailRegistry, passwordRegistry)
      .then(() => {
    		
    })
    .catch((error) => {
     
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert("registro Erroneo")
    });
    alert("correcto");
    containerRegistrate.classList.remove('divDisplayBlock');	
				containerRegistrate.classList.add('divDisplayNone');
				pagLogin.classList.remove('divDisplayNone');
				pagLogin.classList.add('divDisplayBlock');
  } else {
    alert("incorrecto");
     pagLogin.classList.add('divDisplayBlock');
  }
  
				

})




//boton para abrir saldo
const btnSaldo = saldo.addEventListener('click', ()=>{
	containerMenu.classList.remove('divDisplayBlock');
	containerMenu.classList.add('divDisplayNone');
	containerSaldo.classList.remove('divDisplayNone');
	containerSaldo.classList.add('divDisplayBlock');
})

const btnTarifa = tarifa.addEventListener('click', ()=>{
	containerMenu.classList.remove('divDisplayBlock');
	containerMenu.classList.add('divDisplayNone');
	containerTarifa.classList.remove('divDisplayNone');
	containerTarifa.classList.add('divDisplayBlock');
})
 const btnPerfil = perfil.addEventListener('click', ()=>{
 	containerMenu.classList.remove('divDisplayBlock');
	containerMenu.classList.add('divDisplayNone');
	containerPerfil.classList.remove('divDisplayNone');
	containerPerfil.classList.add('divDisplayBlock');
 })

 const btnPreguntas = preguntas.addEventListener('click', ()=>{
 	containerMenu.classList.remove('divDisplayBlock');
	containerMenu.classList.add('divDisplayNone');
	containerPreguntas.classList.remove('divDisplayNone');
	containerPreguntas.classList.add('divDisplayBlock');
 })








