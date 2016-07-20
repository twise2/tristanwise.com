$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop || currentTop < 30) {
        $(".menu").fadeIn("slow");
    } else {
        $(".menu").fadeOut("slow");
    }
    this.previousTop = currentTop;
});
