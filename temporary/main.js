/**
 * グローバルメニュー
 */
const openChild = () =>{
  const childs= document.querySelectorAll('.child_menu');
    childs.forEach( child => {
      child.style.display = "block";
    });
}

setTimeout(openChild,660);


/**
 * アニメーションタイトル
 */
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split("");

  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, '&nbsp;');
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});

// $(function() {
//   var $allMsg = $('.animate-title');
//   var $wordList = $('.animate-title').html().split("");
//   $('.animate-title').html("");
//   $.each($wordList, function(idx, elem) {
//       var newEL = $("<span/>").text(elem).css({ opacity: 0 });
//       newEL.appendTo($allMsg);
//       newEL.delay(idx * 70);
//       newEL.animate({ opacity: 1 }, 1100);
//   });
});

/**
 * ポップアップ
 */
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


/**
 * 雲画像
 */
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


/**
 * スライド画像
 */
const background = document.querySelector('.recruit-pic');


/**
 * パララックス
 */
document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY >= 1900) {
    background.style.backgroundPosition = `0 calc(50% + ${scrollY / 32}px)`;
  }
  else {
    background.style.backgroundPosition = "auto";
  }
});


/**
 * ヘッダー・フッター共通部品
 */
$(function() {
  $.ajax({
    url: '../common/header.html', // includeしたいファイルのパスを指定
    dataType: 'html', // htmlのまま
    // 読み込み成功時の処理
    success: function (data) {
      $('body').prepend(data);
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


/**
 * SPメニュー
 */
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



/* 改行挿入式 */

const mediaQueryList = window.matchMedia('(max-width:680px)');


document.addEventListener('DOMContentLoaded', ()=>{
  const listener = (mm) => { 

  
  if (mm.matches) {
    const spanItem = document.querySelector('.animate-title span:nth-child(13)');
    const new_el = document.createElement('br');
    // console.log(spanItem);
    spanItem.after(new_el);

  } else {
    if(!!document.querySelector('.animate-title br')){

      const el = document.querySelector('.animate-title br');
      el.remove();
    }
}


mediaQueryList.addEventListener("change",listener);
listener(mediaQueryList);

});
