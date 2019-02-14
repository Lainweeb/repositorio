let botaoBuscar = document.querySelector("button");

botaoBuscar.addEventListener("click", function(){
	let cep = document.querySelector("#buscaCep").value;
	if(cep == ""){
		return false;
	}
	let api = `http://viacep.com.br/ws/${cep}/json`;

	let request = new XMLHttpRequest();
	request.open("GET", api);
	request.onload = function(){
		let result = JSON.parse(request.responseText);
		let informacoes = document.querySelector("#informacoes").className = "informacoes";

		let logradouro = document.querySelector("#logradouro");
		logradouro.innerHTML = `CEP Informado: ${cep}<br>${result.logradouro}`;
		logradouro.className = "info";

		let complemento = document.querySelector("#complemento");
		complemento.innerHTML = result.complemento;
		complemento.className = "info";

		let bairro = document.querySelector("#bairro");
		bairro.innerHTML = result.bairro;
		bairro.className = "info";

		let localidade = document.querySelector("#localidade");
		localidade.innerHTML = result.localidade;
		localidade.className = "info";
	};
	request.send();
});