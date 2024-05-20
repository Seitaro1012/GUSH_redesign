import { gu_header, gu_footer } from './layout.js';


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

