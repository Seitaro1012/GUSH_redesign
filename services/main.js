

$(function() {
  $.ajax({
    url: '../common/header.html', // includeしたいファイルのパスを指定
    dataType: 'html', // htmlのまま
    // 読み込み成功時の処理
    success: function (data) {
      $('#container').prepend(data);
    },
    // 読み込み失敗時の処理
    error: function () {
      alert('header error!');
    },
  });
  $.ajax({
    url: '../common/footer.html', // includeしたいファイルのパスを指定
    dataType: 'html', // htmlのまま
    // 読み込み成功時の処理
    success: function (data) {
      $('footer').prepend(data);
    },
    // 読み込み失敗時の処理
    error: function () {
      alert('footer error!');
    },
  });
  
});

const openChild = () =>{
  const childs= document.querySelectorAll('.child_menu');
    childs.forEach( child => {
      child.style.display = "block";
    });
}

setTimeout(openChild,670);




const pops = document.querySelectorAll('.pop');

function callback(entries, obs) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('pon');
      obs.unobserve(entry.target);
    }
  });
}

const options = {
  root: null,
  threshold: 1,
};
const observer = new IntersectionObserver(callback, options);
pops.forEach(target => {
  observer.observe(target);
});



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
