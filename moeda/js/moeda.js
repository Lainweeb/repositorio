const moedas = document.querySelector("#opcaoMoeda")

moedas.addEventListener("click", function(e){
	let valorEscolhido = this.value;
	console.log(valorEscolhido)
	if(valorEscolhido == ""){
		return false;
	}
	let api = `https://economia.awesomeapi.com.br/${valorEscolhido}`;
	let request = new XMLHttpRequest();
	request.open("GET", api);
	request.onload = function(){
		let resultado = JSON.parse(request.responseText);
		document.querySelector("#resultado").innerHTML = `${resultado[0].low}`;
	};
	request.send();
});