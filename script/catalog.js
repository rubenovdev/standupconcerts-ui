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
        burgBool = !burgBool;
        if (burgBool) {
            burgerControls[i].style.display = 'block';
            butImg[i].style.transform = 'rotate(180deg)'
            e.style.height = '190px';
            if (bigPar.style.height !== '190px') {
                // bigPar.style.height = '190px';
            }

        } else {
            burgerControls[i].style.display = 'none';
            butImg[i].style.transform = 'rotate(0)'
            e.style.height = '40px';
            if (bigPar.style.height !== '190px') {
                // bigPar.style.height = '40px';
            }
        }
    })
})