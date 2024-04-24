var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,        
    }
});

var customPagination = document.querySelector('.custom-pagination');
const menu = ['home','about','skill','project','contact']
for (var i = 0; i < swiper.slides.length; i++) {
  var bullet = document.createElement('div');
  bullet.className = 'custom-bullet';
  bullet.setAttribute('data-index', i);
  var txt = document.createTextNode(menu[i])
  bullet.appendChild(txt)
  customPagination.appendChild(bullet);
}


customPagination.addEventListener('click', function(e) {
  index = e.target.getAttribute('data-index');
  if (index !== null) {

    // 모든 custom-bullet 요소의 색상을 초기화
    document.querySelectorAll('.custom-bullet').forEach(function(bullet) {
      bullet.style.color = '#fff'; // 기본 색상으로 설정
    });
    // 클릭된 요소의 색상 변경
    e.target.style.color = '#0090F0'; // 원하는 색상 
    swiper.slideTo(index);
  }
});


swiper.on('slideChange',function(){
  var index=this.activeIndex;  
  for(let i=0; i<5; i++){
    document.querySelectorAll('.custom-bullet')[i].style.color = '#fff';
  }
  document.querySelectorAll('.custom-bullet')[index].style.color = '#0090F0';
});


// 스와이퍼 프로젝트 페이지

var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });