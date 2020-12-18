const expense = document.querySelector('.expense');
expense.addEventListener('click',y=>{
    y.preventDefault();
    window.open('expense/index.html','_self')
})

function Close(){
    const cad = document.querySelector('.cards');
    cad.remove()
}
function Adds(){
    const date = document.querySelector('.data');
    const categoryexpense = document.querySelector('.categoryexpense');
    const amount = document.querySelector('.amount');
    const counterparty = document.querySelector('.counterparty');
    const accounts = document.querySelector('.accounts');
    const projects = document.querySelector('.projects');
    const type = document.querySelector('.type');
    const formBtn = document.querySelector('.formBtn');
    formBtn.addEventListener('click', e=>{
    e.preventDefault();
    if(date !== '' && categoryexpense !== '' && amount !== '' && accounts !== '' && counterparty !== '' &&  projects !== '' && type !== '' ){
        fetch('http://neobisfms.herokuapp.com/api/expense/',{
            method:'POST',
            headers:{
               'Content-Type':'application/json',
               'Authorization': `Token ${localStorage.getItem('neobisToken')}`
            },
            body: JSON.stringify({
                date:date.value,
                categoryexpense:categoryexpense.value,
                amount:amount.value,
                counterparty:counterparty.value,
                accounts:accounts.value,
                projects:projects.value,
                type:type.value
            })
        })
        .then(res=>res.json())
        .then(p=> {
            console.log(p)
        })
    }
})
}