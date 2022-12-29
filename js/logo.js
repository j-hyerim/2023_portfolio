
$(document).ready(function () {
    $(".logo_box").hover(function () {
        $(".logo_box ul").css({"height":"200px"});
    },function() {
        $(".logo_box ul").css({"height":"0px"});
    });
    $(".mainlogo").hover(function () {
        $(".logo_box ul").css({"height":"200px"});
    },function() {
        $(".logo_box ul").css({"height":"0px"});
    });
});