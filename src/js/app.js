const btnIniciar = btnIni.addEventListener('click', ()=>{
	pagLogin.classList.remove('divDisplayBlock');
	pagLogin.classList.add('divDisplayNone');
	containerMenu.classList.remove('divDisplayNone');
	containerMenu.classList.add('divDisplayBlock');
})