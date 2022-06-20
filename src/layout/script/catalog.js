const but = document.querySelectorAll('.controls');
const burgerControls = document.querySelectorAll('.burgerControls')
const butImg = document.querySelectorAll('.imgButton')
const bigPar = document.querySelector('.bigPar')
let controlstxt = document.querySelectorAll('.controlstxt')
let burgerControlsTxt = document.querySelectorAll('.burgerControlsTxtPar')
let burgBool = false;
let open = false;

but.forEach((e, i) => {
    e.addEventListener('click', () => {

        burgerControls[i].classList.toggle('displayBlock');
        butImg[i].classList.toggle('transformRotate');
        e.classList.toggle('height190px')
    })
})