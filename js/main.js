        window.onload = function () {
            var elm = ".box";
            $(elm).each(function (index) {
                // Wheel 이벤트 적용하기
                $(this).on("mousewheel", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로 할때 이벤트 처리
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try{
                                moveTop = $(elmSelecter).next().offset().top;
                            }catch(e){}
                        }
                    // 마우스휠을 아래에서 위로 할때 이벤트 처리
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try{
                                moveTop = $(elmSelecter).prev().offset().top;
                            }catch(e){}
                        }
                    }
                     
                    // 화면 이동 0.3초(300)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 300, complete: function () {
                        }
                    });
                });
            });
        }
      

        
window.addEventListener('scroll', function () {
    console.log(window.scrollY); //스크롤값 확인하기
    });
  // // content가 화면에 80% 지점일 때 동작하는 스크립트
  const spyEl = document.querySelectorAll('section.scroll-spy');
  
  spyEl.forEach(function (spyEl) {
    new ScrollMagic.Scene({
      triggerElement: spyEl,
      triggerHook: 0.8,
    })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
  });

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    mousewheel: true,

  });

$(document).ready(function () {

    $(".skilltree>img").hover(function () {
        $(this).siblings('ul').children('li').css({"color":"#333333"});
        $(this).siblings('ul').children('li').css({"font-weight":"bold"});
        $(this).siblings('ul').children('li').css({"transition":"  all 0.4s"});
        $(this).css({ "transition": "  all 0.4s" });
        $(this).css({ "transform": " scale(1.1)" });
        $(this).css({ "transform": " rotate(-20deg)" });
      } ,function () {
        $(".skilltree li").css({"color":"#ffffff"});
        $(this).css({ "transform": " scale(1)" });
      });


});
      