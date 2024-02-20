$(function(){
    const sec = $('section')
    const BTN = $('.nav ul li')
    const sec01_Top = $('#sec01').offset().top
    const sec02_Top = $('#sec02').offset().top
    const sec03_Top = $('#sec03').offset().top
    

    //페럴럭스
    BTN.click(function(e){
        e.preventDefault()
        let target = $(this)
        let index = target.index() 
        let section = sec.eq(index)
        let offset = section.offset().top
        // console.log(offset)
        $("html, body").animate({scrollTop:offset}, 600)
    });

    $(window).scroll(function(){
        let wScroll = $(this).scrollTop()
        for(let i = 0; i <= 3; i++){
            if(wScroll >= sec.eq(i).offset().top - 200){
                BTN.removeClass("active")
                BTN.eq(i).addClass("active")
            }
        }
    });


    //sec01 : 핸드폰 스크롤
    $(window).scroll(function(){
        winW = $(window).outerWidth();

        if(winW > 1280){
            let wScroll = $(window).scrollTop();
            
            if(wScroll >= sec01_Top){
                $('.sec01 .phone').css({
                    top: wScroll + 170,
                    animation:'none'
                });
            }

            if(wScroll >= sec02_Top - 100){
                $('.sec01 .phone').css('display','none')          
            }else{
                $(".sec01 .phone").css('display','block')
            }

            if(wScroll >= sec02_Top + 100){
                $('.sec02 .p_port').css({
                    position : 'absolute',
                    top: '122%',
                    left:'15%',
                    transition: 'all 4s'
                });
            }else{
                $('.sec02 .p_port').css({
                    animation:'none',
                    top : '110px',
                    left : '51%',
                    transform: 'translateX(-50%)',
                    transition: 'all 1s'
                });
            }

            if(wScroll >= sec03_Top + 100){
                $('.sec02 .p_port').css('display','none')   
                $('.sec03 .pro_phone img').css('display','block')
            }else{
                $('.sec02 .p_port').css('display','block')   
                $('.sec03 .pro_phone img').css('display','none')   
    
            }
        }else{
            // $('.sec02 .p_port').css('display','none')  
            $('.sec03 .pro_phone img').css('display','none')   
        }
    });

    $(window).scroll(function(){
        winW = $(window).outerWidth();
        if(winW <= 1024){
            let wScroll = $(window).scrollTop();

            if(wScroll >= sec02_Top){
                $('.sec02 .p_port').css({
                    top: '120px',
                });
                $('.sec02 .p_port img').css({
                    top: '0',
                });
            }else{
                $('.sec02 .p_port').css({
                    top: '40px',
                });
                $('.sec02 .p_port img').css({
                    top: '12%',
                });
            }
        }

    });


    //.sec02 : 폰 페이드 인아웃
    $(".sec02 .p_port ul li").hide()
    $(".sec02 .p_port ul li:first-child").show()

    setInterval(function(){
        $(".sec02 .p_port ul li:first-child").fadeOut(500).next().fadeIn(500).end(500).appendTo(".sec02 .p_port ul")
    },3000);



    //라이트 갤러리
    $(".click").lightGallery({});
    $(".click").click(function(){
        $("#header").css('z-index',0)
    });

    const port_Top = $('.sec03 .pp2').offset().top
    // console.log(port_Top)
    
    $(window).scroll(function(){
        let wScroll = $(window).scrollTop();
        // console.log(wScroll)
        if(wScroll <= port_Top){
            $('#header').css('z-index',999)
        }
    });
});