const name = document.getElementById('name');
const surName = document.getElementById('surName');
const email = document.getElementById('email');
const number = document.getElementById('number');
const form = document.getElementById('form');
const validateList = document.querySelector('.validateList');
form.addEventListener('submit',e=>{
    e.preventDefault();

    fetch('http://neobisfms.herokuapp.com/api/user/register/', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
            surname: surName.value,
            email:email.value,
            phone:number.value  
        })
    })
    .then(res => res.json())
    .then(e=>{
        console.log(e.token)
        console.log(e)
        if(e.email){
            let frag = '';
            e.email.forEach(err =>{
                let card = `
                    <li>${err}</li>
                `;
                frag += card;
            })
            validateList.innerHTML = frag;
        }
    })
})

