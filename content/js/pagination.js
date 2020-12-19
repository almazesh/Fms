const currentPage = document.querySelector('#currentPage');
const prev = document.querySelector('#prev');
let pageCounter = 0;
let dataCount;

fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=5&offset=${pageCounter}`, {
    method: 'GET',
    headers: {
        'Authorization': `Token ${localStorage.getItem('neobisToken')}`
    }
})
.then(content => content.json())
.then(r=>{
    console.log(r);
    dataCount = r.count;
    let frag = '';
    r["results"].forEach(item=>{
        let card = cardTemplate(item);
        frag += card;
    })
    document.querySelector('.tbody').innerHTML = frag;
})

///////////////////////////    prev

prev.addEventListener('click', l=>{
    if(pageCounter >= 2){
        pageCounter -= 2;
        currentPage.innerHTML = +currentPage.innerHTML - 1;
    }else{
        pageCounter = 0;
    }
    l.preventDefault();
    fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=5&offset=${pageCounter}`,{
        method:'get',
        headers:{
            'Authorization': `Token ${localStorage.getItem('neobisToken')}`
        }
    })
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
    fetch(`http://neobisfms.herokuapp.com/api/transactions/?limit=5&offset=${pageCounter}`,{
        method:'get',
        headers:{
            'Authorization': `Token ${localStorage.getItem('neobisToken')}`
        }
    })
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