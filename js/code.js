var input =  document.querySelector(".inp-ingrese");
var input2 = document.querySelector(".mje-encript");
var btnEncriptar = document.querySelector(".btn-encript");
var btnDesencriptar = document.querySelector(".btn-desencript");
var tieneMayusculas = /[A-ZáéíóúÁÉÍÓÚÑ]/;
var error = document.querySelector(".error");

function encriptar() {
	input2.value = input.value
		.replace(/e/gi, "enter")
		.replace(/i/gi, "imes")
		.replace(/a/gi, "ai")
		.replace(/o/gi, "ober")
		.replace(/u/gi, "ufat");
	if (tieneMayusculas.test(input.value)) {
		//MUESTRO EL MENSAJE DE ERROR
		error.style.display = "block";
		//VACIO EL INPUT DE ENCRIPTADO
		input2.value = "";
		//LO OCULTO DESPUES DE 2 SEG
		setTimeout(function () {
			error.style.display = "none";
		}, 2000); 
	}
	input.value = "";
}

function desencriptar(){
    input2.value = input.value
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');    
}

btnEncriptar.addEventListener("click",() =>{
    encriptar();    
})

btnDesencriptar.addEventListener("click",() =>{
    desencriptar();   
})

var btn = document.querySelector(".btn-copiar");

btn.addEventListener("click",() =>{
    input2.focus();
    input2.select();
    var cont = input2.value;
    navigator.clipboard.writeText(cont);
    
})







