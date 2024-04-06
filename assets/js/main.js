
// const openChild = () =>{
//   const childs= document.querySelectorAll('.child_menu');
//     childs.forEach( child => {
//       child.style.display = "block";
//     });
// }

// setTimeout(openChild,650);






// $(function() {
//   $.ajax({
//     url: '../common/header.html', 
//     dataType: 'html', 
    
//     success: function (data) {
//       $('body').prepend(data);
//     },
//     error: function () {
//       alert('header error!');
//     },
//   });
//   $.ajax({
//     url: '../common/footer.html', 
//     dataType: 'html', 
//     success: function (data) {
//       $('footer').prepend(data);
//     },
//     error: function () {
//       alert('footer error!');
//     },
//   });
  
// });


const overlay = () =>{
  // let dts = document.querySelectorAll('dt');
  console.log(this);
  const ol = document.querySelector('.gu-overlay');
  ol.classList.toggle('js-show');
  document.querySelector('.gu-mobile-menu-icon').classList.toggle('js-open');
  if ( !ol.classList.contains('js-show') ){
    // dts.forEach(dt => {
    //   dt.parentNode.classList.remove('appear');
    //   let dts = 0;
    // });
  }
  // if ( dts !== 0){
  //   dts.forEach(dt => {
  //     dt.addEventListener('click', ()=>{
  //       dt.parentNode.classList.toggle('appear');
  //       dts.forEach(el => {
  //         if (dt !== el) {
  //           el.parentNode.classList.remove('appear');
  //         }
  //       });
  //     });
  //   });
  // }
}
