
function GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
}
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;

    //如果滑动距离太短  
    if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {
        return result;
    }

    var angle = GetSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
        result = 4;
    } else if (angle >= 45 && angle < 135) {
        result = 1;
    } else if (angle >= -135 && angle < -45) {
        result = 2;
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    }

    return result;
}
var startX, startY;
function start(ev) {
    startX = ev.touches[0].pageX;
    startY = ev.touches[0].pageY;
}
function end(ev) {
    var endX, endY;
    endX = ev.changedTouches[0].pageX;
    endY = ev.changedTouches[0].pageY;
    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch (direction) {
        case 0:
            // alert("没滑动");  
            break;
        case 1:
            mySwiper.slideTo(3, 1000, false);//切换到第一个slide，速度为1秒;
            // boxD.removeEventListener('touchstart', start);
            // boxD.removeEventListener('touchend', end);
            break;
        case 2: //事件注销
            if(sTop == 0){
                mySwiper.slideTo(1, 1000, false);
            }
            // alert("向上");
            break;
        case 3:
            // alert("向左");
            break;
        case 4:
            // alert("向右");
            break;
        default:
    }
}
function swip(seletor) {
    var obj = document.querySelector(seletor);
    obj.addEventListener('touchstart', start, false);
    obj.addEventListener('touchend', end, false);
}