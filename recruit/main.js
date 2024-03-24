// リクルートページ


const openChild = () =>{
  const childs= document.querySelectorAll('.child_menu');
    childs.forEach( child => {
      child.style.display = "block";
    });
}

setTimeout(openChild,660);



const clouds = document.querySelectorAll('.cloud');
clouds.forEach(cloud => {
  window.addEventListener('scroll', () => {
    const cloudTop = cloud.getBoundingClientRect().top;
    const window_height = window.innerHeight;
    if (window_height > (cloudTop + 350)) {
      cloud.classList.add('after');
    }
    else {
      cloud.classList.remove('after');
    }
  });
});


const recBackground = document.querySelector('.recruit-hiro-pic');
let scrollY = window.scrollY;

document.addEventListener('DOMContentLoaded',()=>{
  recBackground.style.backgroundPosition = `0 calc(50% + ${scrollY / 256}px)`;
});

document.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  if (scrollY <= 800) {
    recBackground.style.backgroundPosition = `0 calc(50% + ${scrollY / 256}px)`;
  }
  else {
    recBackground.style.backgroundPosition = "auto";
  }
});






$(function() {
  $.ajax({
    url: '../common/header.html', 
    dataType: 'html', 
    success: function (data) {
      $('#container').prepend(data);
    },
    error: function () {
      alert('header error!');
    },
  });
  $.ajax({
    url: '../common/footer.html', 
    dataType: 'html', 
    success: function (data) {
      $('footer').prepend(data);
    },
    error: function () {
      alert('footer error!');
    },
  });
});


const overlay = () =>{
  let dts = document.querySelectorAll('dt');
  const ol = document.querySelector('.overlay');
  ol.classList.toggle('show');
  document.querySelector('.mobile-menu-icon').classList.toggle('menu-open');
  if ( ol.classList.contains('show') === false ){
    dts.forEach(dt => {
      dt.parentNode.classList.remove('appear');
      let dts = 0;
    });
  }
  if ( dts !== 0){
    dts.forEach(dt => {
      dt.addEventListener('click', ()=>{
        dt.parentNode.classList.toggle('appear');
        dts.forEach(el => {
          if (dt !== el) {
            el.parentNode.classList.remove('appear');
          }
        });
      });
    });
  }
}
