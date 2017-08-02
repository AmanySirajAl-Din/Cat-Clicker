// Add cat names Dynamicaly
var catNames = ["Bosy", "Misho", "Mared", "Bisho", "Noor", "Boby"];
// Sort the names of the cats
catNames = catNames.sort();

var numOfClicks = [],
    CatItem;

// add cats to the side list dynimacally
for (var i = 0; i < catNames.length; i++) {
    // make an array for # of clicks for each cat
    numOfClicks[i] = 0;
    CatItem = '<div id="' + i + '" class="cat-list-container cat-Btn cat-up">';
    CatItem += '<h4 class="cat-name-list">' + catNames[i] + '</h4>';
    CatItem += '<img src="img/' + catNames[i] + '.jpg" />';
    CatItem += '</div>';
    $(".cats-list").append(CatItem);
}

// add cats to the show area
// when clicking a cat on the list
$(".cat-list-container").on("click", clickCatListed);

function clickCatListed() {
     $(this).off("click", clickCatListed);
     $(this).removeClass("cat-Btn");
    CatItem = '<div class="cat-container">';
    CatItem += '<h3 class="cat-name">' + $(this).attr("id") + '</h3>';
    CatItem += '<img class="cat-img cat-Btn cat-up" src="img/' + $(this).attr("id") + '.jpg" />';
    CatItem += '</div>';
    $(".active-cats").append(CatItem);

}

// represent the numer of clicks
var clickNum = Number($(".click-num").text());
$(".cat-img").click(catClicked);

function catClicked() {
    console.log("meow")
    clickNum++;
    $(".click-num").text(clickNum);
}

$(".cat-Btn").mousedown(catMousedown);

function catMousedown() {
    $(this).css({
        "top": "5px",
        "left": "4px"
    });
    $(this).removeClass("cat-up");
}
$(".cat-Btn").mouseup(catMouseup);

function catMouseup() {
    $(this).css({
        "top": "0",
        "left": "0"
    });
    $(this).addClass("cat-up");
}
