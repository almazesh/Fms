const form = document.querySelector('.form');
const reset = document.querySelector('.resetInput');

form.addEventListener('submit', e =>{
    e.preventDefault();

    fetch('http://neobisfms.herokuapp.com/api/user/reset-password/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
            email:reset.value
        })
    })
    .then(res => res.json())
    .then(t => {
        console.log(t)
    })
})