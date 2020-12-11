const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

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
            r.non_field_errors.forEach(err =>{
                alert(err)
            })
        }else if(r.token){
            localStorage.setItem('neobisToken', r.token);

            window.open('./content/index.html', '_self');
        }
    })
    .catch(err =>{
        console.log(err);
    })
})