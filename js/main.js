$.validate({
    form : '.form'
});

$(document).ready(function() {

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

    } else {


        $(".scroll").each(function () { // анимация по скролу(используйте этот) достаточно добавить анимируемому блоку класс 'scroll' а css анимацию писать так: '.animated.класс_блока'
            var block = $(this);
            $(window).scroll(function() {
                var top = block.offset().top;
                var bottom = block.height()+top;
                top = top - $(window).height();
                var scroll_top = $(this).scrollTop();
                if ((scroll_top > top) && (scroll_top < bottom)) {
                    if (!block.hasClass("animated")) {
                        block.addClass("animated");
                    }
                } else {
                    block.removeClass("animated");
                }
            });
        });
        $('head').append('<link rel="stylesheet" type="text/css" href="css/animate.css" />'); //подключение файла animation.css если не мобильник
    }
});


/* Анимация  */

document.body.onmousemove=function(e) {
    // Получить событие
    var e = e || window.event;

    var doc = document.documentElement;
    var body = document.body;

    // Получить текущие координаты мыши
    if ("\v" == "v") {
        var mouse_x = e.clientX;
        if (doc.clientLeft) { mouse_x -= doc.clientLeft; }
        if (doc && doc.scrollLeft) { mouse_x += doc.scrollLeft; }
        if (body && body.scrollLeft) { mouse_x += body.scrollLeft; }
        var mouse_y = e.clientY;
        if (doc.clientTop) { mouse_y -=doc.clientTop; }
        if (doc && doc.scrollTop) { mouse_y += doc.scrollTop; }
        if (body && body.scrollTop) { mouse_y += body.scrollTop; }
    }
    else {
        var mouse_x=e.pageX;
        var mouse_y=e.pageY;
    }
    // Параллакс
    do_parallax(mouse_x, mouse_y);
};


function do_parallax(mouse_x, mouse_y) {
    var body = document.body;
    var shift1, shift2, elem;

    // Пропорциональные коэффициенты сдвига для слоев
    var sh_1=20;
    var sh_2=100;


    // Вертикальный и горизонтальный сдвиг для первого слоя
    shift1=Math.round(sh_1*mouse_x*2/body.clientWidth);
    shift2=350-Math.round(10*mouse_y*20/body.clientHeight);

    elem=document.getElementById('header-layer01');
    elem.style.left=shift1+'px';
    elem.style.top=shift2+'px';

    // Вертикальный и горизонтальный сдвиг для второго слоя
    shift1=-50+Math.round(sh_2*mouse_x/body.clientWidth);
    shift2=320+Math.round(mouse_y*10/body.clientHeight);

    elem=document.getElementById('header-layer02');
    elem.style.left=shift1+'px';
    elem.style.top=shift2+'px';


    // Вертикальный и горизонтальный сдвиг для третьего слоя
    shift1=150+Math.round(80*mouse_x/body.clientWidth);
    shift2=85+Math.round(5*mouse_y*10/body.clientHeight);

    elem=document.getElementById('header-layer03');
    elem.style.left=shift1+'px';
    elem.style.top=shift2+'px';


    //------------------

    // Mouse
    shift1=Math.round(80*mouse_x/body.clientWidth);
    shift2=160+Math.round(2*mouse_y*20/body.clientHeight);

    elem=document.getElementById('mouse');
    elem.style.right=shift1+'px';
    elem.style.top=shift2+'px';


    // glasses
    shift1=105-Math.round(100*mouse_x/body.clientWidth);
    shift2=790-Math.round(4*mouse_y*10/body.clientHeight);

    elem=document.getElementById('glasses');
    elem.style.right=shift1+'px';
    elem.style.top=shift2+'px';


    // tab
    shift1=30+Math.round(60*mouse_x/body.clientWidth);
    shift2=292-Math.round(mouse_y*10/body.clientHeight);

    elem=document.getElementById('tab');
    elem.style.right=shift1+'px';
    elem.style.top=shift2+'px';

    // img-cube-05
    shift1=110+Math.round(10*mouse_x/body.clientWidth);
    shift2=263+Math.round(mouse_y*10/body.clientHeight);

    elem=document.getElementById('img-cube-05');
    elem.style.right=shift1+'px';
    elem.style.top=shift2+'px';

}

