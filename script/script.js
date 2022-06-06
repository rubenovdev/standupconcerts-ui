const menu = document.querySelector(".burger__menu");
const closeX = document.querySelector(".close");
const burger = document.querySelector(".burger")
const searchdrop = document.querySelector('.searchdrop');
const search = document.querySelector('.class');
const redimg = document.querySelector('.redimg')
const whiteimg = document.querySelector('.whiteimg')
const loading = document.querySelector('.onload')
redimg.style.display = 'none';
whiteimg.style.display = 'block'
document.body.addEventListener('click', () => {
    redimg.style.display = 'none';
    whiteimg.style.display = 'block'
    searchdrop.style.border = '1px solid  transparent'
    search.placeholder = 'Поиск'
    return false


})
document.body.onload = ()=>{
    setTimeout(()=>{
    loading.style.display='none';
    },800)
}
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
searchdrop.onclick = () => {
    setTimeout(() => {
    
        searchdrop.style.border = '1px solid #FF6A63'
        redimg.style.display = 'block'
        whiteimg.style.display = 'none'
        search.placeholder = 'Введите название'
}, 100);
}
