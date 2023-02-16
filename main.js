let bars = document.querySelector('.menu__bars');
let menu__bar = document.querySelector('.menu__bar');
let menuSpan1 = document.querySelector('.menu__span1');
let menuSpan2 = document.querySelector('.menu__span2');
let menuSpan3 = document.querySelector('.menu__span3');

bars.addEventListener('click', () =>{
  menu__bar.classList.toggle('active');
  menuSpan1.classList.toggle('active1');
  menuSpan2.classList.toggle('active2');
  menuSpan3.classList.toggle('active3');
    console.log(menu__bar);
});

let accordion_btn1 = document.querySelector('.accordion-btn1');
let accordion_btn2 = document.querySelector('.accordion-btn2');
let accordion_btn3 = document.querySelector('.accordion-btn3');
let accordion_btn4 = document.querySelector('.accordion-btn4');
let accordion_btn5 = document.querySelector('.accordion-btn5');
let accordion_btn6 = document.querySelector('.accordion-btn6');
let icon_btn1 = document.querySelector('.icon-btn1');
let icon_btn2 = document.querySelector('.icon-btn2');
let icon_btn3 = document.querySelector('.icon-btn3');
let icon_btn4 = document.querySelector('.icon-btn4');
let icon_btn5 = document.querySelector('.icon-btn5');
let icon_btn6 = document.querySelector('.icon-btn6');
let accordion_text1 = document.querySelector('.accordion-text1');
let accordion_text2 = document.querySelector('.accordion-text2');
let accordion_text3 = document.querySelector('.accordion-text3');
let accordion_text4 = document.querySelector('.accordion-text4');
let accordion_text5 = document.querySelector('.accordion-text5');
let accordion_text6 = document.querySelector('.accordion-text6');

accordion_btn1.addEventListener('click', () => {
  icon_btn1.classList.toggle('accordion-btn-active')
  accordion_text1.classList.toggle('accordion-text-active')
});

accordion_btn2.addEventListener('click', () => {
  icon_btn2.classList.toggle('accordion-btn-active')
  accordion_text2.classList.toggle('accordion-text-active')
});

accordion_btn3.addEventListener('click', () => {
  icon_btn3.classList.toggle('accordion-btn-active')
  accordion_text3.classList.toggle('accordion-text-active')
});

accordion_btn4.addEventListener('click', () => {
  icon_btn4.classList.toggle('accordion-btn-active')
  accordion_text4.classList.toggle('accordion-text-active')
});

accordion_btn5.addEventListener('click', () => {
  icon_btn5.classList.toggle('accordion-btn-active')
  accordion_text5.classList.toggle('accordion-text-active')
});

accordion_btn6.addEventListener('click', () => {
  icon_btn6.classList.toggle('accordion-btn-active')
  accordion_text6.classList.toggle('accordion-text-active')
});