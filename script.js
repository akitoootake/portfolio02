const targetElement=document.querySelectorAll(".animationTarget");
console.log("画面の高さ",window.innerHeight)
document.addEventListener("scroll",function(){
    for(let i=0; i<targetElement.length; i++){
        const getBoundingClientRec=targetElement[i].
        getBoundingClientRect().top+targetElement[i].clientHeight*.6
        if(window.innerHeight>getBoundingClientRec){
          targetElement[i].classList.add('show');
        }
    }
})

$(function(){
  $(".Japan").click(function(){
    $('.first-slide').hide();
    $('.header-ja, .main-ja, footer').show();
  });

  $(".Korean").click(function(){
    $('.first-slide').hide();
    $('.header-ko, .main-ko, footer').show();
  });

  $(".header-title, .fa-chevron-up").click(function(){
    $("html,body").animate({
      "scrollTop":0
    },500);
  });

  /*$(".header-profile").click(function(){
    var position=$('#scroll-profile').offset().top;
    $('html, body').animate({
      'scrollTop':position
    },500);
  });*/

  $(".header-profile").click(function(){
    var position01=$(window).height();
    var position02=$('#scroll-profile').offset().top-(position01/3.5);
    $('html, body').animate({
      'scrollTop':position02
    },500);
    console.log(position01);
  });

  $(".header-profile-ko").click(function(){
    var position01=$(window).height();
    var position02=$('#scroll-profile-ko').offset().top-(position01/ 4);
    $('html, body').animate({
      'scrollTop':position02
    },500);
    console.log(position01);
  });

  $(".header-skill").click(function(){
    var position01=$(window).height();
    var position02=$('#scroll-skill').offset().top-(position01/3.5);
    $('html, body').animate({
      'scrollTop':position02
    },500);
    console.log(position01);
  });

  $(".header-skill-ko").click(function(){
    var position01=$(window).height();
    var position02=$('#scroll-skill-ko').offset().top-(position01/3.5);
    $('html, body').animate({
      'scrollTop':position02
    },500);
    console.log(position01);
  });

  /*$(".header-skill").click(function(){
    var position=$('#scroll-skill').offset().top/1.1 ;
    $('html, body').animate({
      'scrollTop':position
    },500);
  });*/

  $('.fa-grip-lines').click(function(){
    $('.fa-grip-lines').hide();
    $('.fa-grip-lines-vertical').show();
    $('.header-icon-wrapper').fadeIn();
  });

  $('.fa-grip-lines-vertical').click(function(){
    $('.fa-grip-lines-vertical').hide();
    $('.fa-grip-lines').show();
    $('.header-icon-wrapper').fadeOut();
  });

  $('.menuicon-close').click(function(){
    $('.header-icon-wrapper').hide();
    $('.fa-grip-lines-vertical').hide();
    $('.fa-grip-lines').show();
  });

  /*$('.profile-copy').click(function(){
    $('.header-icon-wrapper').fadeOut();
    $('.fa-grip-lines-vertical').hide();
    $('.fa-grip-lines').show();
    var position=$('#scroll-profile').offset().top-370;
    $('html, body').animate({
      'scrollTop':position
    },500);
  });

  $('.skill-copy').click(function(){
    $('.header-icon-wrapper').fadeOut();
    $('.fa-grip-lines-vertical').hide();
    $('.fa-grip-lines').show();
    var position=$('#scroll-skill').offset().top-340;
    $('html, body').animate({
      'scrollTop':position
    },500);
  });*/

  $(".profile-copy").click(function(){
    $('.header-icon-wrapper').fadeOut();
    $('.fa-grip-lines-vertical').hide();
    $('.fa-grip-lines').show();
    var position01=$(window).height();
    var position02=$('#scroll-profile').offset().top-(position01/3.5);
    $('html, body').animate({
      'scrollTop':position02
    },500);
    console.log(position01);
  });

  $(".profile-copy-ko").click(function(){
    $('.header-icon-wrapper').fadeOut();
    $('.fa-grip-lines-vertical').hide();
    $('.fa-grip-lines').show();
    var position01=$(window).height();
    var position02=$('#scroll-profile-ko').offset().top-(position01/3);
    $('html, body').animate({
      'scrollTop':position02
    },500);
    console.log(position01);
  });

  $(".skill-copy").click(function(){
    $('.header-icon-wrapper').fadeOut();
    $('.fa-grip-lines-vertical').hide();
    $('.fa-grip-lines').show();
    var position01=$(window).height();
    var position02=$('#scroll-skill').offset().top-(position01/3.5);
    $('html, body').animate({
      'scrollTop':position02
    },500);
    console.log(position01);
  });

  $(".skill-copy-ko").click(function(){
    $('.header-icon-wrapper').fadeOut();
    $('.fa-grip-lines-vertical').hide();
    $('.fa-grip-lines').show();
    var position01=$(window).height();
    var position02=$('#scroll-skill-ko').offset().top-(position01/3.5);
    $('html, body').animate({
      'scrollTop':position02
    },500);
    console.log(position01);
  });
});
  
