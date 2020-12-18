const form = document.querySelector('.form');
const reset = document.querySelector('.resetInput');
const send = document.querySelector('.send')
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
        send.innerHTML = `
            <p class="text-center text-success ">Мы выслали на почту ссылку для сброса пароля!</p>
            <a href="https://gmail.com" class="text-info text-center mt-2 mb-3">${reset.value}</a>
        `
    })
})

const back = document.querySelector('.back');
back.addEventListener('click',e=>{
    e.preventDefault()
    window.open('../index.html')
})