const data = document.querySelector('.data');
const amount = document.querySelector('.amount');
const accounts = document.querySelector('#accounts');
const send  = document.querySelector('.send');
const type = document.querySelector('.type');
const form = document.querySelector('#form')
form.addEventListener('submit',e=>{
    e.preventDefault();
    fetch('http://neobisfms.herokuapp.com/api/transfer/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            date:data.value,
            amount:amount.value,
            accounts:+accounts.value,
            send_to:send.value,
            type:'3'
        })
    })
    .then(res => res.json())
        .then(o=>{
            console.log(o);
            document.querySelector('.done').innerHTML = `<p class="text-success">Добавлено</p>`
        })
        .then(() =>{
           setTimeout(()=>{
            window.open('../index.html', '_self');
           },3000)
        })
        .catch(err =>{
            console.err(err);
        })
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
    document.querySelector('.send').innerHTML = frag;    
})
function Card(card){
    return`
        <option value=${card.id}>
            ${card.type}
        </option>
    `
}