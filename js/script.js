var click_num = Number($(".click-num").text());
$(".cat-img").click(function(){
    click_num++;
    $(".click-num").text(click_num);
});