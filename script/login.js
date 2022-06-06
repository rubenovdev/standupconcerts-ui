const remember = document.querySelector('#remember');
const closeX = document.querySelectorAll('.close');
const resetpass = document.querySelector('.resetpass');
const menu = document.querySelector(".burger__menu");
// const closeX = document.querySelector(".close");
const burger = document.querySelector(".burger")
const searchdrop = document.querySelector('.searchdrop');
const search = document.querySelector('.class');
const redimg = document.querySelector('.redimg')
const whiteimg = document.querySelector('.whiteimg')
const loading = document.querySelector('.onload');
const eye = document.querySelector('#eye');
const pass = document.querySelector('#pass');


eye.addEventListener('click',()=>{
    if(pass.type === 'text'){
        pass.type = 'password';
    }
    else{
        pass.type = 'text';
    }
})

redimg.style.display = 'none';
whiteimg.style.display = 'block'
document.body.addEventListener('click', () => {
    redimg.style.display = 'none';
    whiteimg.style.display = 'block'
    searchdrop.style.border = '1px solid  transparent'
    search.placeholder = 'Поиск'
    return false


})
remember.onclick = () => {
    resetpass.style.transform = 'scale(1)';
    document.body.style.overflowY = 'hidden';
}
closeX[0].onclick=()=>{
    menu.style.right = '-100%';
    setTimeout(()=>{
       menu.style.display = 'none'; 
    },500)
}
closeX[1].onclick = () => {
    resetpass.style.transform = 'scale(0)';
    document.body.style.overflowY = 'visible';
}
closeX[2].onclick = () => {
    resetpass.style.transform = 'scale(0)';
    document.body.style.overflowY = 'visible';
}
burger.addEventListener('click',()=>{
    menu.style.display = 'block';
    setTimeout(()=>{
        menu.style.right = '0';
        
    },100)
})
searchdrop.onclick = () => {
    setTimeout(() => {
    
        searchdrop.style.border = '1px solid #FF6A63'
        redimg.style.display = 'block'
        whiteimg.style.display = 'none'
        search.placeholder = 'Введите название'
}, 100);
}