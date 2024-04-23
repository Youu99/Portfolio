$(function () {
    $('#click_box').click(function () {
        $('#title_page').fadeOut()
        $('#swiper_page').css('display','block')
    })
})

// SKILLS 태그 바

$(function(){
    
    
    $('.SKILLS_list').click(function(){
        let idx= $(this).index();
        $('.SKILLS_tag_box').eq(idx).fadeIn()
    
    })
    $('.SKILLS_b').click(function(){
        $('.SKILLS_tag_box').fadeOut()
    })
    $('.SKILLS_list2').click(function(){
        let idx= $(this).index();
        $('.SKILLS_tag_box2').eq(idx).fadeIn()
    
    })
    $('.SKILLS_b').click(function(){
        $('.SKILLS_tag_box2').fadeOut()
    })
})







