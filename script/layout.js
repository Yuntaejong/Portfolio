$(document).ready(function(){
    // 새로고침시
    window.onload=function(){
        setTimeout(function(){
            scrollTo(0,0);
        },100);
    }

    // 로딩창
    const loading=`
    <div class="loading">
        <svg xmlns="http://www.w3.org/2000/svg" width="1232" height="684" viewBox="0 0 1232 684" fill="none">
        <path d="M6 500.2C15.7 488.1 171 301.2 189.2 190.8C207.4 80.4 207.4 24.6 174.6 8.79996C141.8 -7.00004 65.5 249 90.9 642.2C90.9 642.2 100.6 364.3 209.8 357C319 349.7 190.4 605.8 274.1 642.2C357.8 678.6 501 353.4 423.4 355.8C345.7 358.2 272.9 607.8 391.8 645C510.8 682.2 599.4 284.2 603 260C606.6 235.8 650.3 48.7 603 8.09996C555.7 -32.5 431.9 594.9 567.8 639.8C703.7 684.7 815.4 18.2 753.5 6.19996C691.6 -5.80004 571.3 569.1 718.3 647.5C867.6 727.1 1081.1 641.4 1070.2 480.8C1065.3 409.2 998.6 303.6 896.7 339.8C877 346.8 848.2 370.7 837.6 395C768 554.8 948.8 798.7 1225.5 545.1" stroke="#200D0F" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
        </svg>
    </div>
    `
    // $('body').append(loading);

    var $svg = $('.loading svg').drawsvg();
    $('.intro').css({'opacity':'0'},300);
    $svg.drawsvg('animate').delay(3000).fadeOut();
    $('.loading').delay(4000).fadeOut();
    $('.intro').delay(4100).css({'opacity':'1'},300);
    
    // 일정 스크롤 이동
    //     var $html =$('html');
    //     var page = 1;
    //     var lastPage = $('.wheel').length;
    //     console.log(lastPage);

    //     $html.animate({scrollTop:0},10);

    //     window.addEventListener('wheel',function(e){
    //         e.preventDefault();
    //     },{passive:false});

    //     $(window).on('wheel',function(e){
    

    //     if($html.is(":animated")) return;
    //     if(e.originalEvent.deltaY >0){
    //     if(page== lastPage) return;
    //     page++;
    //     } else if (e.originalEvent.deltaY < 0){
    //     if(page==1) return;
    //     page--;
    //     }
    //     var posTop = (page-1)*$(window).height();
    //     $html.animate({scrollTop:posTop});
    // });


    
    // 토글 클릭
    $('.toggle').click(function(){
        $(this).find('span').eq(0).toggleClass('t_btn1');
        $(this).find('span').eq(1).toggleClass('t_btn2');
        $(this).find('span').eq(2).toggleClass('t_btn3');
        if($(this).find('span').eq(0).hasClass('t_btn1')){
            $('.gnb').stop().addClass('show');
        } else {
            $('.gnb').stop().removeClass('show');
        }
    });
    // 외부영역 클릭 시 gnb 닫히기
    $('.g_bg').click(function(){
        $('.toggle').find('span').eq(0).removeClass('t_btn1');
        $('.toggle').find('span').eq(1).removeClass('t_btn2');
        $('.toggle').find('span').eq(2).removeClass('t_btn3');
        $('.gnb').stop().removeClass('show');
    });

    // tab click
    $('#tab > ul > li > a').click(function(){
        $('#tab > ul > li > a').removeClass('active');
        $(this).addClass('active');

        $('#tab > ul > li .concept_wrap').hide();
        $(this).next().show();

        return false;
    });
    //스크롤 이벤트
    $(window).scroll(function(){
        let sPos=Math.ceil((($(this).scrollTop()/$(this).height())*100));
        console.log(sPos);

        // wave 스크롤 이벤트
        if(sPos>28){
            $('.wave.wave_1').addClass('bg_wave');

        }else {
            $('.wave.wave_1').removeClass('bg_wave');
        }

        //profile h2 스크롤 이벤트
        
        if(sPos>=28){
            $('#profile h2').fadeIn(300);

        }else {
            $('#profile h2').fadeOut(300);
        }

        //토글 스크롤 이벤트
        if(sPos>=49) {
            $('.toggle, .contact').fadeIn();
        } else {
            $('.toggle, .contact').fadeOut();
        }

        // pub 배경 변화
        if(sPos>=259 && sPos<345){
            $('#pub .pro_1 .pro_bg1').css({
                'width':'3000px',
                'height':'400px'
            });
            $('#pub .pro_1 .pro_bg2').css({
                'width':'1500px',
                'height':'1500px'
            });
        } else {
            $('#pub .pro_1 .pro_bg1').css({
                'width':'1600px',
                'height':'600px'
            });
            $('#pub .pro_1 .pro_bg2').css({
                'width':'50px',
                'height':'50px'
            });
        }
        if(sPos>=342 && sPos<459){
            $('#pub .pro_2 .pro_bg1').css({
                'width':'3000px',
                'height':'400px'
            });
            $('#pub .pro_2 .pro_bg2').css({
                'width':'1500px',
                'height':'1500px',
            });
        } else {
            $('#pub .pro_2 .pro_bg1').css({
                'width':'1600px',
                'height':'600px'
            });
            $('#pub .pro_2 .pro_bg2').css({
                'width':'50px',
                'height':'50px'
            });
        }
        if(sPos>=454 && sPos<550){
            $('#pub .pro_3 .pro_bg1').css({
                'width':'3000px',
                'height':'400px'
            });
            $('#pub .pro_3 .pro_bg2').css({
                'width':'1500px',
                'height':'1500px'
            });
        } else {
            $('#pub .pro_3 .pro_bg1').css({
                'width':'1600px',
                'height':'600px'
            });
            $('#pub .pro_3 .pro_bg2').css({
                'width':'50px',
                'height':'50px'
            });
        }
        if(sPos>=545 && sPos<660){
            $('#pub .pro_4 .pro_bg1').css({
                'width':'3000px',
                'height':'400px'
            });
            $('#pub .pro_4 .pro_bg2').css({
                'width':'1500px',
                'height':'1500px'
            });
        } else {
            $('#pub .pro_4 .pro_bg1').css({
                'width':'1600px',
                'height':'600px'
            });
            $('#pub .pro_4 .pro_bg2').css({
                'width':'50px',
                'height':'50px'
            });
        }
        if(sPos>=656 && sPos<758){
            $('#pub .pro_5 .pro_bg1').css({
                'width':'3000px',
                'height':'400px'
            });
            $('#pub .pro_5 .pro_bg2').css({
                'width':'1500px',
                'height':'1500px'
            });
        } else {
            $('#pub .pro_5 .pro_bg1').css({
                'width':'1600px',
                'height':'600px'
            });
            $('#pub .pro_5 .pro_bg2').css({
                'width':'50px',
                'height':'50px'
            });
        }
    });

    // profile span hover 
    $('.point2').mouseenter(function(){
        $('#profile .a_wrap .pic img').css({
            'transform':'scale(1.2)',
            'filter':'grayscale(0)'
        });
        $('#profile .a_wrap .pic span').css({
            'top':'60px',
            'left':'320px'
        });
    });
    $('.point2').mouseleave(function(){
        $('#profile .a_wrap .pic img').css({
            'transform':'scale(1)',
            'filter':'grayscale(1)'
        });
        $('#profile .a_wrap .pic span').css({
            'top':'85px',
            'left':'290px'
        });
    });
    // about hover 
    $('.point1').mouseenter(function(){
        $('.pic img').attr('src','./images/profile_2.gif').css({
            'filter':'grayscale(0)',
            'transform':'scale(1.2)'
        });
        $('#profile .a_wrap .pic span').css({
            'top':'60px',
            'left':'320px'
        });
    });
    $('.point1').mouseleave(function(){
        $('.pic img').attr('src','./images/profile.jpg').css({
            'filter':'grayscale(1)',
            'transform':'scale(1)'
        });
        $('#profile .a_wrap .pic span').css({
            'top':'85px',
            'left':'290px'
        });
    });

    // aside contact
    $('.contact h2').click(function(){
        // $(this).css({'transform':'rotate(0) translate(0,0)'});
        $('.contact').toggleClass('rotate');
    });
});
