var click_num = Number($(".click-num").text());
$(".cat-img").click(function(){
    click_num++;
    $(".click-num").text(click_num);
})
.mousedown(function(){
    $(this).css({
        "top": "5px",
        "left": "4px"
    });
    $(this).removeClass("cat-up");
})
.mouseup(function(){
    $(this).css({
        "top": "0",
        "left": "0"
    });
    $(this).addClass("cat-up");
})