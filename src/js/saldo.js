
function saldobip(){
	let numTarjeta = boxsaldo.value;
	let selectarj = selectarjeta.value;
	fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numTarjeta || selectarj}`)
	.then(res =>{
		return res.json();
	})
	.then(data =>{
		console.log(data);
		tarjetas(data);
	})
	.catch(error =>{
		console.log(error);
	})
	numTarjeta = '';
}
const tarjetas = data =>{
	for(let i in data){
		const regexp = /(\d+)/g;
		const saldosBip = data.saldoTarjeta.match(regexp);
		const saldoOk = parseInt(saldosBip[0]+saldosBip[1]);
		contenedorSaldo.innerHTML = '$' + saldoOk ;	 
		console.log(saldosBip);
		console.log(saldoOk);
	};
}