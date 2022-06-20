const menu = document.querySelector(".burger__menu");
const closeX = document.querySelector(".close");
const burger = document.querySelector(".burger")
const searchdrop = document.querySelector('.searchdrop');
const search = document.querySelector('.class');
const redimg = document.querySelector('.redimg')
const whiteimg = document.querySelector('.whiteimg')
const loading = document.querySelector('.onload')
// whiteimg.style.display = 'block'
document.body.addEventListener('click', () => {
    searchdrop.classList.remove('borderSolidOrange')
    redimg.classList.add('displayNone')
    whiteimg.classList.add('displayBlock')
    searchdrop.classList.add('borderTransparent')
    search.placeholder = 'Поиск'
    return false;


})
document.onload = ()=>{
    loading.classList.add('onloadAnim')
}
burger.addEventListener('click',()=>{
    menu.classList.add('displayBlock')
    setTimeout(()=>{
        menu.classList.add('Right0')
        
    },100)
})

closeX.addEventListener('click',()=>{
    menu.classList.remove('Right0')
    setTimeout(()=>{
       menu.classList.remove('displayBlock') 
    },500)
})
searchdrop.onclick = () => {
    setTimeout(() => {
        searchdrop.classList.remove('borderTransparent')
        searchdrop.classList.add('borderSolidOrange')
        redimg.classList.remove('displayNonedisplayBlock')
        whiteimg.classList.remove('displayBlock')
        search.placeholder = 'Введите название'
}, 100);
}
