const currentPage = document.querySelector('#currentPage');
const prev = document.querySelector('#prev');
let pageCounter = 0;
let dataCount;

fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=2&offset=${pageCounter}`)
.then(content => content.json())
.then(r=>{
    console.log(r);
    dataCount = r.count;
    let frag = '';
    if(r['results'] !== ' '){
       return  r["results"].forEach(item=>{
            let card = cardTemplate(item);
            frag += card;
            document.querySelector('.tbody').innerHTML = frag;
        })
    }else{
         let frags = '';
         let spin = Spinner();
         frags += spin;
         document.querySelector('.tbody').innerHTML = frags;
    }
    
})
function Spinner(){
    return `
    <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
     </div>
`
}
///////////////////////////    prev

prev.addEventListener('click', l=>{
    if(pageCounter >= 2){
        pageCounter -= 2;
        currentPage.innerHTML = +currentPage.innerHTML - 1;
    }else{
        pageCounter = 0;
    }
    l.preventDefault();
    fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=2&offset=${pageCounter}`)
    .then(p => p.json())
    .then(g =>{
        console.log(g);
        let frag = '';
        g["results"].forEach(item=>{
        let card = cardTemplate(item);
        frag += card;
        document.querySelector('.tbody').innerHTML = frag;
        })
    })
})
///////////////next
const next = document.querySelector('#next');
next.addEventListener('click',j=>{
    if(pageCounter <= dataCount - 2){
        pageCounter +=2;
        if(pageCounter <= dataCount -1){	
            currentPage.innerHTML = +currentPage.innerHTML + 1;
        }
    }else{
        pageCounter = dataCount - 1;
    }
    j.preventDefault();
    fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=2&offset=${pageCounter}`)
    .then(u => u.json())
    .then(h =>{
        let temp = '';
        h['results'].forEach(y=>{
            let card = cardTemplate(y);
            temp += card;
            document.querySelector('.tbody').innerHTML = temp;
        })
    })
})