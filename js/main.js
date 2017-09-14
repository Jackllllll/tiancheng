$(function () {

    resizeRem();

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical'
    });

    // 背景音乐播放
    var flag = true,
        audio = document.querySelector('audio');
    $('#musc').on('click', function () {
        if (flag) {
            $(this).removeClass('anim');
            flag = false;
            audio.pause();
        } else {
            $(this).addClass('anim')
            flag = true;
            audio.play();
        }
    });

    $('.close').on('click',function () {
        $('#alert').hide();
    })
    // 提交
    $('.submit').on('click',function () {
        var $usename = $('input[name="usename"]'),
            $phone = $('input[name="phone"]'),
            $profession = $('input[name="profession"]'),
            $purpose = $('input[name="purpose"]');
        if ( $usename.val() != '' &&  $phone.val() != '' && $profession.val() != '' && $purpose.val() != '' ) {
            $.ajax({
                url:'',
                data:{
                    usename:$usename.val(),
                    phone:$phone.val(),
                    profession:$profession.val(),
                    purpose:$purpose.val()
                },
                type:'POST',
                success:function (data) {
                    if (data == '1') {
                        $('#alert').show();
                    }else {
                        alert('提交失败,请重新提交!')
                    }
                }
            })
        }else{
            alert('请确认填写好完整信息,再确认提交!')
        }

    })
});