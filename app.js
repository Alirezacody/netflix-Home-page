'use strict';
const borderAct = document.querySelector('.border__act');
const borderAct2 = document.querySelector('.border__act2');
const languageSelect = document.querySelector('#language');
const languageSelect2 = document.querySelector('#language2');

const email = document.querySelector('.email');
const lable = document.querySelector('.border__lable');

const email2 = document.querySelector('.email2');
const lable2 = document.querySelector('.border__lable2');

const acordion = document.querySelectorAll('.acardion');
const btnAco = document.querySelectorAll('.btn__ac');
const textAco = document.querySelectorAll('.txt__ac');
const txt = document.querySelectorAll('.text');

console.log(email.placeholder);

languageSelect.addEventListener('focus', () =>
  borderAct.classList.add('border__active')
);
languageSelect.addEventListener('blur', () =>
  borderAct.classList.remove('border__active')
);

languageSelect2.addEventListener('focus', () =>
  languageSelect2.style.outline='auto'
);
languageSelect2.addEventListener('blur', () =>
  languageSelect2.style.outline = 0
);

email.addEventListener('focus', () => {
  lable.classList.add('border__lable--act');
  email.classList.add('emailact');
});
email.addEventListener('blur', () => {
  lable.classList.remove('border__lable--act');
  email.classList.remove('emailact');
});

email2.addEventListener('focus', () => {
  lable2.classList.add('border__lable--act');
  email2.classList.add('emailact');
});
email2.addEventListener('blur', () => {
  lable2.classList.remove('border__lable--act');
  email2.classList.remove('emailact');
});




btnAco.forEach((el , index) =>
  el.addEventListener('click', () => {
    let ind = index;
    if (!el.classList.contains('close__ac')) {
      el.classList.add('close__ac');
     textAco.forEach(el =>{
      if(el.getAttribute(`data-ac-${ind}`) !== null){
        el.classList.remove('close__acordion');
        el.classList.add('open__acordion');
      }
     })
      txt.forEach(el => el.classList.remove('close__acordion'));
      txt.forEach(el => el.classList.add('open__acordion'));
    } else if (el.classList.contains('close__ac')) {
      el.classList.remove('close__ac');
      textAco.forEach(it => it.classList.add('close__acordion'));
      textAco.forEach(it => it.classList.remove('open__acordion'));
    }
  })
);

let state = 'noset';

acordion.forEach((el , index) =>
  el.addEventListener('click', () => {
    let ind = index;
    if (state === 'noset') {
      btnAco.forEach(el=>{
        if(el.getAttribute(`data-btn-${ind}`) !== null && !el.classList.contains('close__ac')){
          el.classList.add('close__ac');
        }
      })

     textAco.forEach(el =>{
      if(el.getAttribute(`data-ac-${ind}`) !== null){
        el.classList.remove('close__acordion');
        el.classList.add('open__acordion');
      }
      state = 'set';
     })
      txt.forEach(el => el.classList.remove('close__acordion'));
      txt.forEach(el => el.classList.add('open__acordion'));
    } else if(state === 'set'){
      textAco.forEach(it => it.classList.add('close__acordion'));
      textAco.forEach(it => it.classList.remove('open__acordion'));
      btnAco.forEach(el=>{
        if(el.getAttribute(`data-btn-${ind}`) !== null && el.classList.contains('close__ac')){
          el.classList.remove('close__ac');
        }
      })
      state = 'noset';
    }
  })
);
