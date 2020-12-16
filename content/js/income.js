const dohod = document.querySelector('.dohod');
dohod.addEventListener('click',er=>{
	er.preventDefault();
	window.open('income/index.html','_self');
	
})


function Close(){
	const cad = document.querySelector('.cards');
	cad.remove()
}



