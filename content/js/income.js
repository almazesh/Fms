const dohod = document.querySelector('.dohod');
dohod.addEventListener('click',er=>{
	er.preventDefault();
	let card = Card();
	document.querySelector('.output').innerHTML = card;
})
function Card(box){
	return `
		<div class="cards">
			<div class="top">
				<p>Добавить доход</p>
				<span onclick="Close()">&times;</span>
			</div>
			<div class="content_dohod">	
				<form action="" class=""> 
					<div>
						<input type="date" placeholder=""  class="data" required="required">
					</div>
					<div>
						<input type="text" placeholder="Категория" class="categoryincome" required="">
					</div>
					<div>
						<input type="number" placeholder="Сумма" class="amount" required="">
					</div>
					<div>
						<input type="text" placeholder="Ваше имя" class="counterparty" required="">
					</div>
					<div>
						<input type="text" placeholder="Счет" class="accounts" required="">
					</div>
					<div>
						<input type="text" placeholder="Проект" class="projects" required="">
					</div>
					<div>
						<input type="text" placeholder="Тип" class="type" required="">
					</div>
					
					<div>
						<button   class="formBtn btn btn-outline-success  mb-3 " onclick=Add()>Добавить</button>
					</div>
				</form>
			</div>
		</div>
	`	
	

}
function Close(){
	const cad = document.querySelector('.cards');
	cad.remove()
}
function Add(){
	let date = document.querySelector('.data');
	const categoryincome = document.querySelector('.categoryincome');
	let amount = document.querySelector('.amount');
	let accounts = document.querySelector('.accounts');
	let counterparty = document.querySelector('.counterparty');
	let projects = document.querySelector('.projects');
	let type = document.querySelector('.type');
	const formBtn = document.querySelector('.formBtn');
	formBtn.addEventListener('click',t =>{
		t.preventDefault();
		console.log(amount.value)
		if(date !== '' && categoryincome !== '' && amount !== '' && accounts !== '' && counterparty !== '' &&  projects !== '' && type !== '' ){
			fetch('http://neobisfms.herokuapp.com/api/income/',{
				method: 'POST',
				headers:{
					'Content-Type':'application/json'
				},
				body:JSON.stringify({
					date:date.value,
					categoryincome:categoryincome.value,
					amount:amount.value,
					counterparty:counterparty.value,
					accounts:accounts.value,
					projects:projects.value,
					type:type.value,
				})
			})
			.then(res => res.json())
			.then(o=>{
				console.log(o)
				
			})
		}
	})
}
