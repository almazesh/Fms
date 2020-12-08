function Toggle() {
    document.querySelector('#sidebar').classList.toggle('active')
   }
   window.addEventListener('click',er=>{
       er.preventDefault()
   })
   const currentPage = document.querySelector('#currentPage');
   const prev = document.querySelector('#prev');
   let pageCounter = 0;
   let dataCount;
   
   fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=2&offset=${pageCounter}`)
   .then(content => content.json())
   .then(r=>{
       console.log(r);
       dataCount = r.count;
       let frag = '';
       r["results"].forEach(item=>{
           let card = cardTemplate(item);
           frag += card;
           document.querySelector('.tbody').innerHTML = frag;
       })
   })
   
   prev.addEventListener('click', l=>{
       if(pageCounter >= 2){
           pageCounter -= 2;
           currentPage.innerHTML = +currentPage.innerHTML - 1;
       }else{
           pageCounter = 0;
       }
       l.preventDefault();
       fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=2&offset=${pageCounter}`)
       .then(p => p.json())
       .then(g =>{
           console.log(g);
           let frag = '';
           g["results"].forEach(item=>{
           let card = cardTemplate(item);
           frag += card;
           document.querySelector('.tbody').innerHTML = frag;
           })
       })
   })
        
   const next = document.querySelector('#next');
   next.addEventListener('click',j=>{
       if(pageCounter <= dataCount - 2){
           pageCounter +=2;
           if(pageCounter <= dataCount -1){	
               currentPage.innerHTML = +currentPage.innerHTML + 1;
           }
       }else{
           pageCounter = dataCount - 1;
       }
       j.preventDefault();
       fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=2&offset=${pageCounter}`)
       .then(u => u.json())
       .then(h =>{
           let temp = '';
           h['results'].forEach(y=>{
               let card = cardTemplate(y);
               temp += card;
               document.querySelector('.tbody').innerHTML = temp;
           })
       })
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
   
   