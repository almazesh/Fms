const expense = document.querySelector('.expense');
expense.addEventListener('click',y=>{
    y.preventDefault();
    let card = Cards();
    document.querySelector('.output').innerHTML = card;
})
function Cards(){
    return `
        <div class="cards">
        <div class="top">
            <p style="color:red">Добавить Расход</p>
            <span onclick="Close()" style="color:red">&times;</span>
        </div>
        <div class="content_dohod">	
            <form action=""> 
                <div>
                    <input type="date" placeholder=""  class="dohod_input1" required="required">
                </div>
                <div>
                    <input type="text" placeholder="Расход" class="dohod_input2" required="">
                </div>
                <div>
                    <input type="number" placeholder="Сумма" class="dohod_input3" required="">
                </div>
                <div>
                    <input type="text" placeholder="Счет" class="dohod_input4" required="">
                </div>
                <div>
                    <input type="text" placeholder="Ваше имя" class="dohod_input5" required="">
                </div>
                <div>
                    <input type="text" placeholder="Категория: взнос и тд" class="dohod_input6" required="">
                </div>
                <div>
                    <input type="text" placeholder="Проект" class="dohod_input7" required="">
                </div>
                <div>
                    <button onclick="Dohod()" class="btn btn-outline-danger add_dohod mb-3">Сохранить</button>
                </div>
            </form>
        </div>
    </div>
    `
}
function Close(){
    const cad = document.querySelector('.cards');
    cad.remove()
}