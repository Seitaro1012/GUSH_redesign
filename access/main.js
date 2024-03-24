
const openChild = () =>{
  const childs= document.querySelectorAll('.child_menu');
    childs.forEach( child => {
      child.style.display = "block";
    });
}

setTimeout(openChild,650);






$(function() {
  $.ajax({
    url: '../common/header.html', 
    dataType: 'html', 
    
    success: function (data) {
      $('body').prepend(data);
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
