import { gu_header, gu_footer } from './layout.js';
// const openChild = () =>{
//   const childs= document.querySelectorAll('.child_menu');
//     childs.forEach( child => {
//       child.style.display = "block";
//     });
// }

// setTimeout(openChild,650);





document.addEventListener('DOMContentLoaded',function(){

  document.getElementById('gu-header-js').insertAdjacentHTML('afterbegin', gu_header);
  document.getElementById('gu-footer-js').insertAdjacentHTML('afterbegin', gu_footer);

  document.querySelector('.js-toggleButton').addEventListener('click', function(){
    document.querySelector('body').classList.toggle('js-overlay');
    const ol = document.querySelector('.gu-overlay');
    ol.classList.toggle('js-show');
    document.querySelector('.gu-mobile-menu-icon').classList.toggle('js-open');

  });

});


$(function(){
  $('.gu-top-mv').ripples({
    // resolution: 300, //波紋が広がる速さ
    // dropRadius: 20, //波紋の大きさ
    // perturbance: 0.01 //波紋の揺れの量
  });

});