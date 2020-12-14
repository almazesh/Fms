const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const validateList = document.querySelector('.validateList');

if(localStorage.getItem('neobisToken')){
    console.log('Вы уже авторизованы!')
    window.open('./content/index.html', '_self');
}

form.addEventListener('submit', e =>{
    e.preventDefault();
    
    fetch('http://neobisfms.herokuapp.com/api/user/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            password: password.value
        })
    })
    .then(res => res.json())
    .then(r => {
        console.log(r);
        if(r.non_field_errors){
            let frag = '';
            r.non_field_errors.forEach(err =>{
                let card = `
                    <li>${err}</li>
                `;
                frag += card;
            })
            validateList.innerHTML = frag;
        }else if(r.token){
            localStorage.setItem('neobisToken', r.token);
            alert('Вы успешно зашли!')
            window.open('./content/index.html', '_self');
        }
    })
    .catch(err =>{
        console.log(err);
    })
})


const reset = document.querySelector('.reset');
reset.addEventListener('click',e=>{
    e.preventDefault();
    window.open('../ResetPassword/index.html', '_self')
})