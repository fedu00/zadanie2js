const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

const cracow = document.querySelector('.cracow');
const ny = document.querySelector('.ny');
const tokyo = document.querySelector('.tokyo');

btn1.addEventListener('click', function(){
    cracow.classList.add("show");
    ny.classList.remove("show");
    tokyo.classList.remove("show");
})
btn2.addEventListener('click', function(){
    ny.classList.add("show");
    cracow.classList.remove("show");
    tokyo.classList.remove("show");
})
btn3.addEventListener('click', function(){
    tokyo.classList.add("show");
    cracow.classList.remove("show");
    ny.classList.remove("show");
})