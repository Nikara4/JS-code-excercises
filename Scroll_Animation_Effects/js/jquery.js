//spaghetti code, minimalise later

$(document).on("scroll", function () {
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
  
    //article 2
    const $art2 = $(".art2");
    const art2FromTop = $art2.offset().top;
    const art2Height = $art2.outerHeight();
  
    //article 3
    const $art3 = $(".art3");
    const art3FromTop = $art3.offset().top;
    const art3Height = $art3.outerHeight();
  
    //article 4
    const $art4 = $(".art4");
    const art4FromTop = $art4.offset().top;
    const art4Height = $art4.outerHeight();
  
    //quote1
    const $quote1 = $(".op1");
    const op1FromTop = $quote1.offset().top;
    const op1Height = $quote1.outerHeight();
  
    // //quote2
    const $quote2 = $(".op2");
    const op2FromTop = $quote2.offset().top;
    const op2Height = $quote2.outerHeight();
  
    if (scrollValue > art2FromTop + art2Height - windowHeight) {
      $art2.addClass("active");
    }
  
    if (scrollValue > art3FromTop + art3Height - windowHeight) {
      $art3.addClass("active");
    }
  
    if (scrollValue > art4FromTop + art4Height - windowHeight) {
      $art4.addClass("active");
    }
  
    if (scrollValue > op1FromTop + op1Height / 4 - windowHeight) {
      $quote1.addClass("active");
    }
  
    if (scrollValue > op2FromTop + op2Height / 4 - windowHeight) {
      $quote2.addClass("active");
    }
  
    // clearing
    if (scrollValue < 100) {
      $("article").removeClass("active");
    }
  });
  