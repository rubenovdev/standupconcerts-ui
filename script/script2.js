const eye = document.querySelector('#eye');
const pass = document.querySelector('#pass');
const button = document.querySelector(".wrapper__button");
const check = document.querySelector('#check');
const searchdrop = document.querySelector('.searchdrop');
const search = document.querySelector('.class');
const redimg = document.querySelector('.redimg');
const whiteimg = document.querySelector('.whiteimg');
const menu = document.querySelector(".burger__menu");
const closeX = document.querySelector(".close");
const burger = document.querySelector(".burger")
redimg.style.display = 'none';
whiteimg.style.display = 'block'
button.style.pointerEvents = 'none';
button.style.opacity = '.5';

document.body.addEventListener('click', () => {
    redimg.style.display = 'none';
    whiteimg.style.display = 'block'
    searchdrop.style.border = '1px solid  transparent'
    search.placeholder = 'Поиск'
    return false


})

burger.addEventListener('click',()=>{
    menu.style.display = 'block';
    setTimeout(()=>{
        menu.style.right = '0';
        
    },100)
})

closeX.addEventListener('click',()=>{
    menu.style.right = '-100%';
    setTimeout(()=>{
       menu.style.display = 'none'; 
    },500)
})

check.addEventListener('click',()=>{
    if(check.value === 'on'){
        button.style.pointerEvents = 'unset';
        button.style.opacity = '1';
        check.value = 'off';
    }
    else{
        button.style.pointerEvents = 'none';
        button.style.opacity = '.5';
        check.value = 'on'
    }
})


eye.addEventListener('click',()=>{
    if(pass.type === 'text'){
        pass.type = 'password';
    }
    else{
        pass.type = 'text';
    }
})

searchdrop.onclick = () => {
    setTimeout(() => {
    
        searchdrop.style.border = '1px solid #FF6A63'
        redimg.style.display = 'block'
        whiteimg.style.display = 'none'
        search.placeholder = 'Введите название'
}, 100);
}