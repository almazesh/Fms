const transfer = document.querySelector('.transfer');
transfer.addEventListener('click',e=>{
    e.preventDefault();
    let card = Per()
    document.querySelector('.output').innerHTML = card;
})
function Per(){
    return `
    <div class="cards">
        <div class="top">
         <p>Добавить перевод</p>
         <span onclick="Close()">&times;</span>
        </div>
     <div class="content_dohod">	
        <form action="" class=""> 
            <div>
                <input type="date" placeholder=""  class="data" required="required">
            </div>
            <div>
                <input type="number" placeholder="Сумма" class="amount" required="">
            </div>
            <div>
                <input type="text" placeholder="Счет" class="accounts" required="">
            </div>
            <div>
                <input type="text" placeholder="Тип" class="type" required="">
            </div>
            
            <div>
                <button   class="formBtn btn btn-outline-success  mb-3 " onclick=Transfer()>Добавить</button>
            </div>
        </form>
    </div>
</div>

    `
}
function Transfer(){
    const data = document.querySelector('.data');
    const amount = document.querySelector('.amount');
    const accounts = document.querySelector('.accounts');
    const type = document.querySelector('.type');
    const form = document.querySelector('formBtn');
    form.addEventListener('click',e=>{
        e.preventDefault()
        fetch('http://neobisfms.herokuapp.com/api/transfer/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                
            })
        })
    })
    .then(res => res.json())
    .then(r=>{
        console.log(r);
    })
}