const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', e =>{
	e.preventDefault();
	fetch('http://neobisfms.herokuapp.com/api/transactions/?limit=20')
	.then(res => res.json())
	.then(r => {
		let frag = '';
		r["results"].forEach(item=>{
			let card = cardTemplate(item);
			if(item.type === "Доход"){
				console.log(item);
				frag += card;
			}
		})
		document.querySelector('.tbody').innerHTML = frag;
	})
})
const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click',ev=>{
	ev.preventDefault();
	fetch('http://neobisfms.herokuapp.com/api/transactions/?limit=20')
	.then(hope => hope.json())
	.then(v =>{
		let frags = '';
		v['results'].forEach(items=>{
			let cards = cardTemplate(items);
			if(items.type === 'Расход'){
				frags += cards;
			}
		})
		document.querySelector('.tbody').innerHTML = frags;
	})
})
const perevod = document.querySelector('#perevod');
perevod.addEventListener('click',ev=>{
	ev.preventDefault();
	fetch('http://neobisfms.herokuapp.com/api/transactions/?limit=20')
	.then(hope => hope.json())
	.then(v =>{
		let frags = '';
		v['results'].forEach(items=>{
			let cards = cardTemplate(items);
			if(items.type === 'Перевод'){
				frags += cards;
			}
		})
		document.querySelector('.tbody').innerHTML = frags;
	})
})
	const allBtn = document.querySelector('#all');
	allBtn.addEventListener('click',ec=>{
		ec.preventDefault();
		fetch('http://neobisfms.herokuapp.com/api/transactions/?limit=20')
		.then(hopes => hopes.json())
		.then(v =>{
			let frags = '';
			v['results'].forEach(items=>{
				let cards = cardTemplate(items);
					frags += cards;
			})
			document.querySelector('.tbody').innerHTML = frags;
		})
	})