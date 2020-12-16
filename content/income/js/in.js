
let date = document.querySelector('.data');
const categoryincome = document.querySelector('.category');
let amount = document.querySelector('.amount');
let counterparty = document.querySelector('.counterparty');
let projects = document.querySelector('.projects');
let type = document.querySelector('.type');
const acc = document.querySelector('#accounts');
const form = document.querySelector('#form');

        
form.addEventListener('submit', e =>{
    e.preventDefault();
    if(date !== '' && categoryincome !== '' && amount !== '' && acc !== '' && counterparty !== '' &&  projects !== '' && type !== '' ){
        fetch('http://neobisfms.herokuapp.com/api/income/',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                date:date.value,
                categoryincome: +categoryincome.value,
                amount:amount.value,
                counterparty:counterparty.value,
                accounts: +acc.value,
                projects:projects.value,
                type: "1",
            })

        })
        .then(res => res.json())
        .then(o=>{
            console.log(o);
        })
        .then(() =>{
            window.open('../../index.html', '_self');
        })
        .catch(err =>{
            console.err(err);
        })
    }
})



fetch('http://neobisfms.herokuapp.com/api/data/accounts/')
.then(res => res.json())
.then(h=>{
    console.log(h);
    let frag = '';
    h.forEach(item=>{
        let card = Card(item);
        frag+=card;
    })
    document.querySelector('#accounts').innerHTML = frag;    
})
function Card(card){
    return`
        <option value=${card.id}>
            ${card.type}
        </option>

    `
}
fetch('http://neobisfms.herokuapp.com/api/income/categoryofincome/')
.then(res => res.json())
.then(l=>{
    console.log(l)
    let frags = '';
    l.forEach(ite=>{
        let card = Category(ite);
        frags += card;
    })
    document.querySelector('.category').innerHTML = frags;
})

function Category(cards){
    return`
        <option value=${cards.id}>
            ${cards.name}
        </option>

    `
}

fetch('http://neobisfms.herokuapp.com/api/data/partner/')
.then(tes => tes.json())
.then(f=>{
    console.log(f)
    let frag = '';
    f.forEach(hope =>{
        let card = Category(hope);
        frag += card;
    })
    document.querySelector('.counterparty').innerHTML = frag;
})


fetch('http://neobisfms.herokuapp.com/api/data/projects/')
.then(fre => fre.json())
.then(j =>{
    console.log(j)
    let base = '';
    j.forEach(ites =>{
        let note = Category(ites);
        base += note;
    })
    document.querySelector('.projects').innerHTML = base;
})