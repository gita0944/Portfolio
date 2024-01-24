"use strict";

// opening animation


$(window).on("load",function(){
  if($(".loader").is(':visible')){
    $("body").addClass("remove-scrolling");
    $(".js_opening").delay(6000).fadeOut("slow",function(){
      $("body").removeClass("remove-scrolling");
    });
}
});


// hamburger menu

$(function(){
  $(".js_hamburger").click(function(){
    $(this).toggleClass("open-close");
    $(".js_navigation").toggleClass("open-close");

    // ハンバーガーメニューが開いている場合はスクロールを禁止
    if ($(".js_navigation").hasClass("open-close")) {
      $("body").addClass("remove-scrolling");
    } else {
      // ハンバーガーメニューが閉じられた場合はスクロール禁止を解除
      $("body").removeClass("remove-scrolling");
    }
  });

  $(".js_header-nav_link").click(function(){
    $(".js_hamburger").removeClass("open-close");
    $(".js_navigation").removeClass("open-close");
    // ナビゲーションリンクがクリックされた場合もスクロール禁止を解除
    $("body").removeClass("remove-scrolling");
  });
});


// kv

$(function(){
  $(window).scroll(function(){
    $(".top_kv_title_word").each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > pos - windowHeight + 100){
        $(this).addClass("kv_title_scroll");
      }
    });
  });
});



$(function(){
  $(window).scroll(function(){
    $(".js_kv_title").each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > pos - windowHeight + 100){
        $(this).addClass("kv_title_scroll")
      }
    })
  })
})


// fadein

$(function(){
  $(window).scroll(function(){
    $(".js_section_title").each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > pos - windowHeight + 100){
        $(this).addClass("section_scroll");
      }
    });
  });
});


// 各フェード
$(function(){
  $(window).scroll(function(){
    $(".js_top_about_img-wrapper").each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > pos - windowHeight + 100){
        $(this).addClass("top_about_img_scroll");
      }
    });
  });
});


$(function(){
  $(window).scroll(function(){
    $(".js_top_about").each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > pos - windowHeight + 100){
        $(this).addClass("top_about_scroll");
      }
    });
  });
});


gsap.from(".js_top_about_myself",{
  scrollTriger:{
    trigger:".js_top_about_myself",
    start:"center left",
    end:"center top",
  },
  duration:2,
  x:-200,
  opacity:0,
  ease:"Power4.inOut",
});



// icon

$(function(){
  $(window).scroll(function(){
    $(".js_top_skill_icon-wrapper").css({  transform: "rotateY(calc(360deg * 3))"});
  });
});



// service

$(function(){
  $(window).scroll(function(){
    $(".js_top_service_item").each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > pos - windowHeight + 100){
        $(this).addClass("service_scroll");
      }
    });
  });
});


$(".top_service_list").slick({
  slidesToShow:3,
  responsive:[{
    breakpoint:768,
    settings:{
      slidesToShow:2,
      arrows:true,
      dots:true,
    },
  },
  {
    breakpoint:640,
    settings:{
      slidesToShow:1,
      arrows:true,
      dots:true,
    },
  },
]
});

// website 
// originalのanimation definition
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $(".js_top_service_contents_item").each(function(){ //fadeUpTriggerというクラス名が
    var pos = $(this).offset().top;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= pos - windowHeight){
    $(this).addClass("fadeUp");// 画面内に入ったらfadeUpというクラス名を追記
    }
    });
}

$(window).scroll(function(){
  fadeAnime();
});

// works

$(function(){
  $(window).scroll(function(){
    $(".js_work_item").each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > pos - windowHeight + 100){
        $(this).addClass("work_scroll");
      }
    });
  });
});

$(".top_work_list").slick({
  slidesToShow:3,
  arrows:true,
  dots:true,    
  responsive:[{
    breakpoint:768,
    settings:{
      slidesToShow:2,
    },
  },
  {
    breakpoint:640,
    settings:{
      slidesToShow:1,
    },
  },
]
})






// contact
$(function(){
  $(window).scroll(function(){
    $(".js_contact_form").each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > pos - windowHeight + 100){
        $(this).addClass("fadeIn");
      }
    });
  });
})