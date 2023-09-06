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
        <path d="M6 500.2C15.7 488.1 171 301.2 189.2 190.8C207.4 80.4 207.4 24.6 174.6 8.79996C141.8 -7.00004 65.5 249 90.9 642.2C90.9 642.2 100.6 364.3 209.8 357C319 349.7 190.4 605.8 274.1 642.2C357.8 678.6 501 353.4 423.4 355.8C345.7 358.2 272.9 607.8 391.8 645C510.8 682.2 599.4 284.2 603 260C606.6 235.8 650.3 48.7 603 8.09996C555.7 -32.5 431.9 594.9 567.8 639.8C703.7 684.7 815.4 18.2 753.5 6.19996C691.6 -5.80004 571.3 569.1 718.3 647.5C867.6 727.1 1081.1 641.4 1070.2 480.8C1065.3 409.2 998.6 303.6 896.7 339.8C877 346.8 848.2 370.7 837.6 395C768 554.8 948.8 798.7 1225.5 545.1" stroke="#200D0F" stroke-width="12" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    `
    // $('body').append(loading);

    var $svg = $('.loading svg').drawsvg();
    $('.intro').css({'opacity':'0'},300);
    $svg.drawsvg('animate').delay(3000).fadeOut();
    $('.loading').delay(4000).fadeOut();
    $('.intro').delay(4100).css({'opacity':'1'},300);
    
    
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


    //스크롤 이벤트
    $(window).scroll(function(){
        let sPos=$(this).scrollTop();
        console.log(sPos);
        //토글 스크롤 이벤트
        if(sPos>=800) {
            $('.toggle').show();
        } else {
            $('.toggle').hide();
        }

        // wave 스크롤 이벤트
        if(sPos>=200){
            $('.wave.wave_1').addClass('bg_wave');

        }else {
            $('.wave.wave_1').removeClass('bg_wave');
        }

        //profile h2 스크롤 이벤트
        
        if(sPos>=300){
            $('#profile h2').fadeIn(300);

        }else {
            $('#profile h2').fadeOut(300);
        }

        // pub 패럴렉스 구현
        
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
});