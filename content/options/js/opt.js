const name = document.querySelector('.name');
const add_name = document.querySelector('.add_name');
add_name.addEventListener('click',e=>{
    e.preventDefault();
    fetch('http://neobisfms.herokuapp.com/api/data/partner/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:name.value
        })
    })
    .then(res=>res.json())
    .then(g=>{
        console.log(g)
    })
})


// accounts

const accounts = document.querySelector('.accounts');
const add_acc = document.querySelector('.add_acc');
add_acc.addEventListener('click',e=>{
    e.preventDefault();
    fetch('http://neobisfms.herokuapp.com/api/data/accounts/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            type:accounts.value
        })
    })
    .then(res=>res.json())
    .then(g=>{
        console.log(g)
    })
})


// categoryofincome


const income = document.querySelector('.income');   
const add_income = document.querySelector('.add_income');
add_income.addEventListener('click',e=>{
    e.preventDefault();
    fetch('http://neobisfms.herokuapp.com/api/income/categoryofincome/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:income.value
        })
    })
    .then(res=>res.json())
    .then(g=>{
        console.log(g)
    })
})


// categoryofexpense


const expense = document.querySelector('.expense');
const add_expense = document.querySelector('.add_expense');
add_expense.addEventListener('click',e=>{
    e.preventDefault();
    fetch('http://neobisfms.herokuapp.com/api/expense/categoryofexpense/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:expense.value
        })
    })
    .then(res=>res.json())
    .then(g=>{
        console.log(g)
    })
})


// project

const project = document.querySelector('.project');
const add_project = document.querySelector('.add_project');
add_project.addEventListener('click',e=>{
    e.preventDefault();
    fetch('http://neobisfms.herokuapp.com/api/data/partner/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:project.value
        })
    })
    .then(res=>res.json())
    .then(g=>{
        console.log(g)
    })
})
