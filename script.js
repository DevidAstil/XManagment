// Анимация векторов
$(window).scroll(function(){
    $('.vector_item').toggleClass('vector_item-anim', $(this).scrollTop() > 250);
});
// header top
$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_top-menu').toggleClass('active_menu');
        $('body').toggleClass('lock');
    })
});
// Табы
const tabsBtn=document.querySelectorAll(".tabs_nav-btn");
const tabsItem=document.querySelectorAll(".tabs_item");

tabsBtn.forEach(function(item){
    item.addEventListener("click",function(){
        var currentBtn=item;
        var tabId=currentBtn.getAttribute("data-tab");
        var currentTab=document.querySelector(tabId);

        tabsBtn.forEach(function(item){
            item.classList.remove('active');
        });
        tabsItem.forEach(function(item){
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
    });
});

document.querySelector(".tabs_nav-btn").click();

// Слайдер
$('.slider_inner').slick();
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 650,
        settings:"unslick"
        }
    ]
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth <= 650) {
      $('.slider_inner').slick('unslick');
      sliderIsLive = false;
    }
    else {
      if (sliderIsLive) {
        $('.slider_inner').slick();
        sliderIsLive = true;
      }
    }
  });

//Анимация страницы

const animItems=document.querySelectorAll('.anim_items');
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('animation');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animOnScroll();
}