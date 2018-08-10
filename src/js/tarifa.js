function tarifaBip(){
	let tarjetabox = boxtarjeta.value;
	let tarjetaselct = selectarjet.value;
	fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${boxtarjeta || selectarjet}`)
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

const tarifa = data =>{
	for(let i in data){
		
	}
}
