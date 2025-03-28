const container = document.querySelector('.container');
const btn = document.getElementById('btn');
const success = document.querySelector('.sub-msg');
const dismiss = document.querySelector('#btn-dismiss');


btn.addEventListener('click',()=>{
    container.style.display = 'none';
    success.style.display = 'flex';

})

dismiss.addEventListener('click',()=>{
    container.style.display = 'flex';
    success.style.display = 'none';
})

window.addEventListener('resize', changeImageSource);
window.addEventListener('load', changeImageSource);  

function changeImageSource() {
    const img = document.getElementById('hero-image');
    if (window.innerWidth <= 375) {  
        img.src = '/images/illustration-sign-up-mobile.svg';
    } else {  
        img.src = '/images/illustration-sign-up-desktop.svg';
    }
}
