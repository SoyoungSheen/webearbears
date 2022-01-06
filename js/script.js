$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 0 && $(this).scrollTop() <= 400) {
      $(".scroll").css("background", "#ffef6e").css("transition", "0.5s");
    }
    else if ($(this).scrollTop() >= 500 && $(this).scrollTop() <= 900) {
      $(".scroll").css("background", "#45FFFF").css("transition", "0.5s");
    }
    else if ($(this).scrollTop() >= 1000 && $(this).scrollTop() <= 1400) {
      $(".scroll").css("background", "#FF3892").css("transition", "0.5s");
    }
    else if ($(this).scrollTop() >= 1400 && $(this).scrollTop() <= 1900) {
      $(".scroll").css("background", "#3498db").css("transition", "0.5s");
    }
    else if ($(this).scrollTop() >= 2000 && $(this).scrollTop() <= 2500) {
      $(".scroll").css("background", "#2ecc71").css("transition", "0.5s");
    }
  });
});
