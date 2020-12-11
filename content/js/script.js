// Is auth a user???

if(!localStorage.getItem('neobisToken')){
    alert('Вы не авторизованы!')
        window.open('../../index.html', '_self');
}


function Toggle() {
    document.querySelector('#sidebar').classList.toggle('active')
   }
   window.addEventListener('click',er=>{
       er.preventDefault()
   })
  
   function cardTemplate(card){
   if(card.counterparty == null){
       card.counterparty = '-'
   }				
   if(card.projects == null){
       card.projects = '-'
   }
   if(card.categoryincome == null){
       card.categoryincome = '-'
   }
   if(card.type == 'Income'){
       card.type = 'Доход'
   }
   if(card.type == 'Expense'){
       card.type = 'Расход'
   
   }
   
   if(card.type == 'Transfer'){
       card.type = 'Перевод'
   }
   if(card.amount == card.amount){
       card.amount = card.amount + ' ' +  'KGS';
   }
   return `
   <tr>
       <td scope="row">${card.date}</td>
       <td data-title="Тип">${card.type}</td>
       <td data-title="Сумма">${card.amount}</td>
       <td data-title="Счет" data-type="currency">${card.accounts}</td>
       <td data-title="Контрагент" data-type="currency">${card.counterparty}</td>
       <td data-title="Категория" data-type="currency">${card.categoryincome}</td>
       <td data-title="Проект" data-type="currency">${card.projects}</td>
       
   </tr>
   `
   }
   
   ///////////total
   fetch('http://neobisfms.herokuapp.com/api/gettotal/')
   .then(tr=> tr.json())
   .then(t =>{
       let frag = '';
       console.log(t)
       t.forEach(ite=>{
           let total = TotalCard(ite);
           frag += total;
           document.querySelector('.ul').innerHTML = frag;
       })
   })
   function TotalCard(tr){
       return `
           <li class="mt-4">TotalIncome: ${tr.totalincome}</li>
           <li class="mt-4">TotalExpense: ${tr.totalexpense}</li>
           <li class="mt-4">TotalAmount: ${tr.totalamount}</li>
       `
   }
   
   

//    SIGN OUT

const signOutBtn = document.querySelector('.signOut');
signOutBtn.addEventListener('click', e =>{
    e.preventDefault();

    localStorage.removeItem('neobisToken');
    window.open('../../index.html', '_self');
})