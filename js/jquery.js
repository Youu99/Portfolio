$(function () {
    $('#click_box').click(function () {
        $('#title_page').fadeOut()
        $('#swiper_page').css('display','block')
    })
})

// SKILLS 태그 바

$(function(){
    $('.SKILLS_list').click(function(){
        let idx = $(this).index(); // 클릭된 아이콘의 인덱스를 구함
        if ($('.SKILLS_tag_box').eq(idx).is(":visible")) {
            // 해당 창이 이미 보이는 경우, 창을 숨김
            $('.SKILLS_tag_box').eq(idx).slideUp();
        } else {
            // 해당 창이 보이지 않는 경우, 다른 모든 창을 숨기고 클릭된 창만 보임
            $('.SKILLS_tag_box').slideUp();
            $('.SKILLS_tag_box').eq(idx).slideDown();
        }
    });
    $('.SKILLS_b').click(function(){
        $('.SKILLS_tag_box').slideUp(); // 모든 창을 숨김
    });
});



// 텍스트 스크롤 애니메이션 





