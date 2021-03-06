/* ======= Model ======= */

var model = {
    adminMode: false,
    activeCat: null, // the currently-selected cat
    catsObjArray: [
        {
            numOfClicks: 0,
            name: "Bisho",
            imgSrc: "img/Bisho.jpg"
        },
        {
            numOfClicks: 0,
            name: "Boby",
            imgSrc: "img/Boby.jpg"
        },
        {
            numOfClicks: 0,
            name: "Bosy",
            imgSrc: "img/Bosy.jpg"
        },
        {
            numOfClicks: 0,
            name: "Mared",
            imgSrc: "img/Mared.jpg"
        },
        {
            numOfClicks: 0,
            name: "Misho",
            imgSrc: "img/Misho.jpg"
        }
    ]
};


/* ======= Octopus ======= */

var octopus = {
    init: function () {
        // put the first cat on model.activeCat Obj
        // to be showen in my page
        model.activeCat = model.catsObjArray[0];

        // Here will be the View init
        catListVeiw.render();
        catView.init();
        adminView.init();
    },

    // get the data from the model
    getActiveCat: function () {
        return model.activeCat;
    },

    getCatsObjArray: function () {
        return model.catsObjArray;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function () {
        model.activeCat.numOfClicks++;
        // update the click-num text on the page
        catView.render();
    },

    // set the currently-selected cat to the object passed in
    setActiveCat: function (cat) {
        model.activeCat = cat;
    },

    // Show or Hide Admin Mode
    toggleAdminMode: function () {
        if (model.adminMode) {
            adminView.$adminForm.show();
            model.adminMode = false;
        } else {
            adminView.$adminForm.hide();
            model.adminMode = true;
        }
    },

    // Hide Admin Mode
    hideAdminMode: function () {
        model.adminMode = false;
        octopus.toggleAdminMode();
    },

    // Show Admin Mode
    showAdminMode: function () {
        model.adminMode = true;
        octopus.toggleAdminMode();
    },

    // Add new Cat
    addNewCat: function (newCat) {
        model.catsObjArray.push(newCat);
        catListVeiw.render();
    }

};


/* ======= View ======= */

var catView = { // for the active cat section
    init: function () { // run once

        // click event for the cat image
        $(".active-cat-img").on("click", function () {
            // increase cat's numOfClicks (in Model) 
            // So, Use octopus fun to make this connection
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function () {
        // update the DOM elements with values from the current cat
        // first, get the active cat to get its values
        var activeCat = octopus.getActiveCat();
        // update the the cat name header to the activeCat name
        $(".cat-name").text(activeCat.name);
        // update the active cat photo by updating its src attribute
        $(".active-cat-img").attr("src", activeCat.imgSrc);
        // finally update the showen number of clicks for the active cat
        $(".click-num").text(activeCat.numOfClicks);
    }

};

var catListVeiw = {
    render: function () {
        var cat, CatListItem;
        // first, I need the Model catsObjArray to render my list
        // So, Use octopus fun to make this connection
        var catsObjArray = octopus.getCatsObjArray();

        // clear the prev listed cats if found
        $(".cats-list-items").html("");

        // loop over the cats
        for (var i = 0; i < catsObjArray.length; i++) {
            // this is the cat we're currently looping over
            cat = catsObjArray[i];
            // make a new cat list item and set its text
            CatListItem = '<div id="cat' + i + '" class="cat-list-container cat-Btn cat-up">';
            CatListItem += '<h4 class="cat-name-list">' + cat.name + '</h4>';
            CatListItem += '<img src="' + cat.imgSrc + '" alt="Cat Image Not Found"/>';
            CatListItem += '</div>';
            $(".cats-list-items").append(CatListItem);

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            $("#cat" + i).on('click', (function (catCopy) {
                return function () {
                    // need to change the active cat in Model
                    // So, Use octopus fun to make this connection
                    octopus.setActiveCat(catCopy);
                    // Update the cat view to the clicked cat from the list
                    catView.render();
                };
            })(cat));
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
    },
};

var adminView = {
    init: function () {
        this.$adminForm = $(".admin-form");
        this.$catNameTB = $(".cat-name-TB");
        this.$imgUrlTB = $(".img-url-TB");
        this.$saveBtn = $(".save-btn");
        this.$cancelBtn = $(".cancel-btn");

        $(".admin-btn").on("click", octopus.toggleAdminMode);
        $(".save-btn").on("click", function () {
            $(".errorName").text("");
            if ($(".cat-name-TB").val() != "" && $(".img-url-TB").val() != "") {
                var newCat = {
                    numOfClicks: 0,
                    name: $(".cat-name-TB").val(),
                    imgSrc: $(".img-url-TB").val()
                }
                octopus.addNewCat(newCat);
                $(".cat-name-TB").val("");
                $(".img-url-TB").val("");

            } else {
                if ($(".cat-name-TB").val() == "") {
                    $(".errorName").text("Please enter cat name");

                }
                if ($(".img-url-TB").val() == "") {
                    $(".errorURL").text("Please enter cat image URL");
                }
            }
        });

        $(".cancel-btn").on("click", octopus.hideAdminMode);
        $(".reset-btn").on("click", adminView.reset);

        octopus.toggleAdminMode();
    },
    reset: function () {
        $(".cat-name-TB").val("");
        $(".img-url-TB").val("");
        $(".errorName").text("");
        $(".errorURL").text("");
    }
}

// make it go!
octopus.init();

/*
// Add cat names Dynamicaly
var catNames = ["Bosy", "Misho", "Mared", "Bisho", "Boby"];
// Sort the names of the cats
catNames = catNames.sort();

var numOfClicks = [],
    activeCatID = 0,
    CatListItem;

// add cats to the side list dynimacally
for (var i = 0; i < catNames.length; i++) {
    // make an array for # of clicks for each cat
    numOfClicks[i] = 0;
    CatListItem = '<div id="' + i + '" class="cat-list-container cat-Btn cat-up">';
    CatListItem += '<h4 class="cat-name-list">' + catNames[i] + '</h4>';
    CatListItem += '<img src="img/' + catNames[i] + '.jpg" />';
    CatListItem += '</div>';
    $(".cats-list").append(CatListItem);
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
