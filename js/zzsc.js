
var biZhiDelayLoadImg = $("#bigteamfzUl img");
var biZhiDelayLoadImgLength = biZhiDelayLoadImg.length;
for (var i = 3; i < biZhiDelayLoadImgLength; i++) {
    var curDelayImg = biZhiDelayLoadImg.eq(i);
    if (curDelayImg.attr("srch")) {
        curDelayImg.attr("src", curDelayImg.attr("srch"));
        curDelayImg.removeAttr("srch")
    }
}

var _focus_num = $("#smallteamfzUl > li").length;
var _focus_direction = true;
var _focus_pos = 0;
var _focus_max_length = _focus_num * 1230;
var _focus_li_length = 1230;
var _focus_dsq = null;
var _focus_lock = true;
function autoExecAnimate() {
    $("#mypic" + _focus_pos).addClass("info-cur").siblings("li.info-cur").removeClass("info-cur");
    var moveLen = _focus_pos * _focus_li_length;
    $("#bigteamfzUl").animate({
        left: "-" + moveLen + "px"
    },
    600);
    if (_focus_pos == (_focus_num - 1)) {
        _focus_direction = false
    }
    if (_focus_pos == 0) {
        _focus_direction = true
    }
    if (_focus_direction) {
        _focus_pos++
    } else {
        _focus_pos--
    }
}
_focus_dsq = setInterval("autoExecAnimate()", 2000);
$("#smallteamfzUl > li").hover(function() {
    _focus_pos = parseInt($(this).attr("sid"));
    if (_focus_lock) {
        clearInterval(_focus_dsq);
        _focus_lock = false
    }
    $("#mypic" + _focus_pos).addClass("info-cur").siblings("li.info-cur").removeClass("info-cur");
    var moveLen = _focus_pos * _focus_li_length;
    $("#bigteamfzUl").stop(true, true).animate({
        left: "-" + moveLen + "px"
    },
    600)
},
function() {
    if (_focus_lock == false) {
        _focus_dsq = setInterval("autoExecAnimate()", 4000);
        _focus_lock = true
    }
});
$("#bigteamfzUl").hover(function() {
    if (_focus_lock) {
        clearInterval(_focus_dsq);
        _focus_lock = false
    }
},
function() {
    if (_focus_lock == false) {
        _focus_dsq = setInterval("autoExecAnimate()", 4000);
        _focus_lock = true
    }
});
$(".pic-list2 li").hover(function() {
    $(this).addClass("hover").siblings().removeClass("hover")
},
function() {
    $(this).removeClass("hover")
});
