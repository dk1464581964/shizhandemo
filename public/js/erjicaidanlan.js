$(() => {
  let $A = $(".body-carousel-nav"), $B = $(".body-carousel-nav2");


  $A.hover(() => {
    $B.fadeIn();
    $(".body-carousel-nav-jtbj").css("display","inline-block")
  }, (e) => {
    if (e.toElement == $B[0]) return;
    $B.fadeOut();
  });

  $B.mouseout(function (e) {
    if (e.toElement == $A[0]) return;
    $(this).fadeOut();
  })
});