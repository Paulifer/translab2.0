//esto es para ver el saldo y calcular tarifa
function saldobip(){
	let numTarjeta = boxsaldo.value;
	let selectarjeta = selectarjeta.value;
	let numTarjeta2 = boxtarjeta.value;
	let selectarjeta2 = selectarjet.value;
	fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numTarjeta || selectarj || numTarjeta2 || selectarjeta2} `)
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
	numTarjeta = ' ';
	numTarjeta2 = ' ';
}
const tarjetas = data =>{
	for(let i in data){
		const regexp = /(\d+)/g;
		const saldosBip = data.saldoTarjeta.match(regexp);
		const saldoOk = parseInt(saldosBip[0]+saldosBip[1]);
		contenedorSaldo.innerHTML = '$' + saldoOk ;	 
		console.log(saldoOk);
		//seccion tarifa
		const selectorTarifa = selector;
		const saldoTotal =  
	};
}