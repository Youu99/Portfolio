$(function () {
    $('#click_box').click(function () {
        $('#title_page').fadeOut()
        $('#swiper_page').css('display','block')
    })
})

// SKILLS 태그 바

$(function(){
    $('.SKILLS_list').click(function(){
        let idx = $(this).index(); 
        if ($('.SKILLS_tag_box').eq(idx).is(":visible")) {
           
            $('.SKILLS_tag_box').eq(idx).slideUp();
        } else {

            $('.SKILLS_tag_box').slideUp();
            $('.SKILLS_tag_box').eq(idx).slideDown();
        }
    });
    $('.SKILLS_b').click(function(){
        $('.SKILLS_tag_box').slideUp();
    });
});



// 텍스트 스크롤 애니메이션 





