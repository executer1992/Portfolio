 $(document).ready(function(){
    $(".fa-times").click(function(){
      $(".slide-menu").addClass("hide-menu");
      $(".fa-bars").addClass("opacity-one");
    });
    $(".fa-bars").click(function(){
      $(".slide-menu").removeClass("hide-menu");
      $(".fa-bars").removeClass("opacity-one");
    });
        });
