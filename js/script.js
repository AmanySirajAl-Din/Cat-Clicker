// Add cat names Dynamicaly
var catNames = ["Bosy", "Misho", "Mared", "Bisho", "Noor", "Boby"];
var CatItem;

// add cats to the side list dynimacally
for(var i=0; i<catNames.length; i++){
    CatItem = '<div class="cat-list-container cat-Btn cat-up">';
    CatItem += '<h4 class="cat-name-list">' + catNames[i] + '</h4>';
    CatItem += '<img src="img/' + catNames[i] + '.jpg" />';
    CatItem += '</div>';
    $(".cats-list").append(CatItem);
}

// represent the numer of clicks
var clickNum = Number($(".click-num").text());
$(".cat-img").click(function () {
    clickNum++;
    $(".click-num").text(clickNum);
});
$(".cat-Btn").mousedown(function () {
        $(this).css({
            "top": "5px",
            "left": "4px"
        });
        $(this).removeClass("cat-up");
    })
    .mouseup(function () {
        $(this).css({
            "top": "0",
            "left": "0"
        });
        $(this).addClass("cat-up");
    });
