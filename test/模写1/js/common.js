$(function(){

    //スムーススクロール
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href = $(this).attr('href');
        var target = $(href == "#" || href == "" ? 'html':href);
        var position = target.offset().top;
        $('html,body').animate([scrollTop:position],speed);
        return false;
    })
    
    //ページトップボタン
    $('#pagetop').hide();
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('#pagetop').fadeIn();
        }else{
            $('# pagetop').fadeOut();
        }
    })

    })

})