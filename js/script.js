

/*
// Add cat names Dynamicaly
var catNames = ["Bosy", "Misho", "Mared", "Bisho", "Boby"];
// Sort the names of the cats
catNames = catNames.sort();

var numOfClicks = [],
    activeCatID = 0,
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
    if(i == 0){
        $(".active-cat-img").attr("src", "img/" + catNames[i] + ".jpg");
        $(".click-num").text(numOfClicks[i]);
    }
}

// add cats to the show area
// when clicking a cat on the list
$(".cat-list-container").on("click", clickCatListed);

function clickCatListed() {
    activeCatID = $(this).attr("id");
    $(".active-cat-img").attr("src", "img/" + catNames[activeCatID] + ".jpg");
    $(".click-num").text(numOfClicks[activeCatID]);
}

// represent the numer of clicks
$(".active-cat-img").click(catClicked);

function catClicked() {
    numOfClicks[activeCatID]++;
    $(".click-num").text(numOfClicks[activeCatID]);
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
*/
