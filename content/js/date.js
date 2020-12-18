
const data = document.getElementById('data');
data.addEventListener('click',y=>{
	y.preventDefault();
	const datapicker = document.getElementById('datepicker');
	const datapicker2 = document.getElementById('datepicker1');
	if(datapicker2.value !== "" && datapicker.value !== ""){
		fetch('http://neobisfms.herokuapp.com/api/transactions/?limit=20', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Token ${localStorage.getItem('neobisToken')}`
			}
		})
		.then(hopess => hopess.json())
		.then(v =>{
			data.addEventListener
			let frags = '';
			let parsedDate = 0;
			let parsedDate2 = 0;
			let parsedItemDate = 0;
			v['results'].forEach(items=>{
				let cards = cardTemplate(items);
				parsedDate = Date.parse(new Date(datapicker.value));
				parsedDate2 = Date.parse(new Date(datapicker2.value));
				parsedItemDate = Date.parse(new Date(items.date));
				
				if(parsedItemDate >= parsedDate && parsedItemDate <= parsedDate2){
					frags += cards;
				}
			});
			if(frags !== ""){
				document.querySelector('.tbody').innerHTML = frags;
			}else{
				document.querySelector('.tbody').innerHTML = "<h1 class='notFound'>Ничего не найдено!</h1>";
			} 
			
		})
	}else{
		alert("Не все поля заполнены!")
	}
})