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
					<form action="" > 
						<div>
							<input type="date" placeholder=""  class="dohod_input1" required="required">
						</div>
						<div>
							<input type="text" placeholder="Категория" class="dohod_input2" required="">
						</div>
						<div>
							<input type="number" placeholder="Сумма" class="dohod_input3" required="">
						</div>
						<div>
							<input type="text" placeholder="Ваше имя" class="dohod_input5" required="">
						</div>
						<div>
							<input type="text" placeholder="Счет" class="dohod_input4" required="">
						</div>
						<div>
							<input type="text" placeholder="Проект" class="dohod_input7" required="">
						</div>
						<div>
							<input type="text" placeholder="Тип" class="dohod_input6" required="">
						</div>
						
						<div>
							<button  class="btn btn-outline-success  mb-3 " id="formBtn" onclick=Add()>Сохранить</button>
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
			let date = document.querySelector('.dohod_input1');
			const categoryincome = document.querySelector('.dohod_input2');
			let amount = document.querySelector('.dohod_input3');
			let accounts = document.querySelector('.dohod_input4');
			let counterparty = document.querySelector('.dohod_input5');
			let projects = document.querySelector('.dohod_input7');
			let type = document.querySelector('.dohod_input6');
			const formBtn = document.querySelector('#formBtn');
			formBtn.addEventListener('click',t =>{
				t.preventDefault();

			if(date !== '' && categoryincome !== '' && amount !== '' && accounts !== '' && counterparty !== '' &&  projects !== '' && type !== '' )
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
			
		})

		}