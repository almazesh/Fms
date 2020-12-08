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
					<form action=""> 
						<div>
							<input type="date" placeholder=""  class="dohod_input1" required="required">
						</div>
						<div>
							<input type="text" placeholder="Доход" class="dohod_input2" required="">
						</div>
						<div>
							<input type="number" placeholder="Сумма" class="dohod_input3" required="">
						</div>
						<div>
							<input type="text" placeholder="Счет" class="dohod_input4" required="">
						</div>
						<div>
							<input type="text" placeholder="Ваше имя" class="dohod_input5" required="">
						</div>
						<div>
							<input type="text" placeholder="Категория: взнос и тд" class="dohod_input6" required="">
						</div>
						<div>
							<input type="text" placeholder="Проект" class="dohod_input7" required="">
						</div>
						<div>
							<button onclick="Dohod()" class="btn btn-outline-success add_dohod mb-3">Сохранить</button>
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

	function Dohod(){
		let td = document.createElement('td');
		let first = document.querySelector('.dohod_input1');
 		const second = document.querySelector('.dohod_input2');
		let three = document.querySelector('.dohod_input3');
		let four = document.querySelector('.dohod_input4');
		let five = document.querySelector('.dohod_input5');
		let six = document.querySelector('.dohod_input6');
		let seven = document.querySelector('.dohod_input7');
		const objectGet = [
			{
				date: first.value,
				type: second.value,
				amount: three.value,
				accounts: four.value,
				counterparty: five.value,
				categoryincome: six.value,
				projects: seven.value
			}
		]

		document.querySelector('.tbody').appendChild(td)
		let arr = objectGet
		let frag = '';
			arr.forEach(i =>{
				let card = cardTemplate(i);
				frag += card;
				 document.querySelector('.tbody').innerHTML = frag;
			})
			let n = JSON.stringify(arr);
			localStorage.getItem('getincome')
			localStorage.setItem('getincome',n)
			console.log(n);
			let t = JSON.parse(n)
			console.log(t);
	}