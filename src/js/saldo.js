
function bip(){
	fetch('http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip={id}')
	.then(res =>{
		return res.json();
	})
	.then(data =>{
		console.log(data);
	})
	.catch(error =>{
		console.log(error);
	})
}