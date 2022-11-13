var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    // slidesPerView: 1.5,
    // spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});
// let asos = document.querySelector('.asos')
// asos.addEventListener("mouseover" , function(){
//   let asos1k = document.querySelector('.asos1k')
//   asos1k.style.display = 'block'
//   asos1k.style.transform = 'translateY(-342px)'
//   asos1k.style.transition = '0.5s'
// })
// asos.addEventListener("mouseleave" , function(){
//   let asos1k = document.querySelector('.asos1k')
//   asos1k.style.display = 'none'
//   asos1k.style.transform = 'translateY(-342px)'
//   asos1k.style.transition = '0.5s'
// })


// let asos2 = document.querySelector('.asos2')
// asos2.addEventListener("mouseover" , function(){
//   let asos2k = document.querySelector('.asos2k')
//   asos2k.style.display = 'block'
//   asos2k.style.transform = 'translateY(-342px)'
//   asos2k.style.transition = '0.5s'
// })
// asos2.addEventListener("mouseleave" , function(){
//   let asos2k = document.querySelector('.asos2k')
//   asos2k.style.display = 'none'
//   asos2k.style.transform = 'translateY(-342px)'
//   asos2k.style.transition = '0.5s'
// })
var swiper = new Swiper(".miSwiper", {
  cssMode: true,
  slidesPerView: 7.1757,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});