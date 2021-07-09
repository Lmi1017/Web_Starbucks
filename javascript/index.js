const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

// focus
searchInputEl.addEventListener('focus', function () {
  searchInputEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

// focus 제거
searchInputEl.addEventListener('blur', function () {
  searchInputEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})


// fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


// swiper
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한 번에 슬라이드 3개를 보여줌
  spaceBetween: 10, //슬라이드 사이의 간격
  centeredSlices: true, //1번 슬라이드를 가운데에 보이게 함
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //page 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // hide
    promotionEl.classList.add('hide');
  } else {
    // show
    promotionEl.classList.remove('hide');
  }
});


// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
    triggerHook: .8 // 뷰 포트를 기준으로 (0~1) 어느 지점에서 hook을 걸지 설정
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})


// year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //해당 년