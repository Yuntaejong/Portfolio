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

    // 모달창
    const modal=`
    <div class="modal">
        <div class="inner">
            <a href="#" title="팝업">
                <img src="./images/popup.jpg" alt="">
            </a>
            <p>
                <input type="checkbox" id="ch">
                <label for="ch">오늘 하루 열지 않음</label>
                <input type="button" value="닫기" id="c_btn">  
            </p>
        </div>
    </div>
    `;

    // 모달,로딩 변수를 body의 맨 뒤쪽에 출력한다.
    $('body').append(loading,modal);

    //쿠키생성하기
  let ch = $('.modal #ch');  //체크박스 변수

  //현재 브라우저에 쿠키정보가 있는지 없는지 유무를 판단하여 모달이 나오지 않게함.
    if($.cookie('popup')=='none'){
        $('.modal').hide();
    }
  //쿠키의 존재 유무를 체크하여 쿠키를 생성하거나 모달윈도 숨기기
    function closeModal(){
        if(ch.is(':checked')){ //만약에 체크박스에 체크가 된 경우라면
  //쿠키를 생성하기
        $.cookie('popup', 'none', {expires:1, path:'/'});
        }
        //체크박스에 체크 안한 경우 그냥 모달 숨기기
        $('.modal').hide();
    }

    //닫기 버튼을 클릭하면 closeModal함수 실행하여 쿠키생성하고 모달 숨기기 한다.
    $('.modal #c_btn').click(function(){
        closeModal();
    });

    var $svg = $('.loading svg').drawsvg();
    $('.intro, .modal').animate({'opacity':'0'},300);
    $svg.drawsvg('animate').delay(3000).fadeOut();
    $('.loading').delay(4000).fadeOut();
    $('.intro, .modal').delay(4100).animate({'opacity':'1'},300);
    
    // 일정 스크롤 이동
        var $html =$('html');
        var page = 1;
        var lastPage = $('.wheel').length;
        console.log(lastPage);

        $html.animate({scrollTop:0},10);

        window.addEventListener('wheel',function(e){
            e.preventDefault();
        },{passive:false});

        $(window).on('wheel',function(e){
    

        if($html.is(":animated")) return;
        if(e.originalEvent.deltaY >0){
        if(page== lastPage) return;
        page++;
        } else if (e.originalEvent.deltaY < 0){
        if(page==1) return;
        page--;
        }
        var posTop = (page-1)*$(window).height();
        $html.animate({scrollTop:posTop});
    });


    
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
    // point1
    $('.point1').mouseenter(function(){
        $('.pic img').attr('src','./images/profile2.gif').css({
            'transform':'scale(1.2)'
        });
        $('#profile .a_wrap .pic span').css({
            'top':'60px',
            'left':'320px'
        });
    });
    $('.point1').mouseleave(function(){
        $('.pic img').attr('src','./images/introduce_mbti.jpg').css({
            'transform':'scale(1)'
        });
        $('#profile .a_wrap .pic span').css({
            'top':'85px',
            'left':'290px'
        });
    });
    // point2
    $('.point2').mouseenter(function(){
        $('.pic img').attr('src','./images/profile1.jpg').css({
            'transform':'scale(1.2)'
        });
        $('#profile .a_wrap .pic span').css({
            'top':'60px',
            'left':'320px'
        });
    });
    $('.point2').mouseleave(function(){
        $('.pic img').attr('src','./images/introduce_mbti.jpg').css({
            'transform':'scale(1)'
        });
        $('#profile .a_wrap .pic span').css({
            'top':'85px',
            'left':'290px'
        });
    });
    
    // design img effect 
    let img01=$('#design > .design_wrap > ul > li:first-child > a > img');
    let img02=$('#design > .design_wrap > ul > li:nth-child(2) > a > img');
    let img03=$('#design > .design_wrap > ul > li:nth-child(3) > a > img');
    let img04=$('#design > .design_wrap > ul > li:nth-child(4) > a > img');
    let img05=$('#design > .design_wrap > ul > li:last-child > a > img');
    let n =0;

    function img_fadeInOut(){
        img01.stop().fadeOut();
        img02.stop().fadeOut();
        img03.stop().fadeOut();
        img04.stop().fadeOut();
        img05.stop().fadeOut();
        if(n==1) {
            n=0;
        } else {
            n++;
        }
        img01.eq(n).stop().fadeIn();
        img02.eq(n).stop().fadeIn();
        img03.eq(n).stop().fadeIn();
        img04.eq(n).stop().fadeIn();
        img05.eq(n).stop().fadeIn();
    };

    let Timer = setInterval(img_fadeInOut,2000);

    // design popup 

    let total = 2;
    let i = 1;
    const num = document.getElementById('page');
    const r_btn = document.getElementById('r_btn');
    const l_btn = document.getElementById('l_btn');
    const logo = document.getElementById('logo');
    const pattern = document.getElementById('pattern');
    const uiux = document.getElementById('uiux');
    const poster = document.getElementById('poster');
    const banner = document.getElementById('banner');

    num.innerHTML=i+'/'+total;
    r_btn.addEventListener('click',function(){
        if(i==2){
            i=1;
        } else {
            i++;
        }
        num.innerHTML=i+'/'+total;
        logo.src=`./images/logo_design${i}.jpg`;
        pattern.src=`./images/pattern_design${i}.jpg`;
        uiux.src=`./images/uiux_design${i}.jpg`;
        poster.src=`./images/poster_design${i}.jpg`;
        banner.src=`./images/banner_design${i}.jpg`;
    });
    l_btn.addEventListener('click',function(){
        if(i==1){
            i=2;
        } else {
            i--;
        }
        num.innerHTML=i+'/'+total;
        logo.src=`./images/logo_design${i}.jpg`;
        pattern.src=`./images/pattern_design${i}.jpg`;
        uiux.src=`./images/uiux_design${i}.jpg`;
        poster.src=`./images/poster_design${i}.jpg`;
        banner.src=`./images/banner_design${i}.jpg`;
    });
    // a.logo 클릭
    $('.logo').click(function(){
        n=1;
        num.innerHTML=i+'/'+total;
        $('.logo_popup, .inter').fadeIn();
        return false;
    });
    // a.pattern 클릭
    $('.pattern').click(function(){
        $('.pattern_popup, .inter').fadeIn();
        return false;
    });
    // a.uiux 클릭
    $('.uiux').click(function(){
        $('.uiux_popup, .inter').fadeIn();
        return false;
    });
    // a.poster 클릭
    $('.poster').click(function(){
        $('.poster_popup, .inter').fadeIn();
        return false;
    });
    // a.banner 클릭
    $('.banner').click(function(){
        $('.banner_popup, .inter').fadeIn();
        return false;
    });
    //popup 닫기
    $('.fa-xmark').click(function(){
        $('.popup, .inter').fadeOut();
    });

    // aside contact
    $('.contact h2').click(function(){
        $('.contact').toggleClass('rotate');
    });

    $('#pub .pro .desc .desc_m ul:last-of-type li:first-child a, #pub .pro .desc .desc_m ul:last-of-type li:nth-child(2) a').click(function(){
        swal("공사중!","불편을 드려 죄송합니다","error");
        return false;
    })
});
