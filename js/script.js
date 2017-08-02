/* ======= Model ======= */

var model = {
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
        catView.init();
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
        catListVeiw.render();
    },
    
    // set the currently-selected cat to the object passed in
    setActiveCat: function(cat) {
        model.activeCat = cat;
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
        var cat, listItem;
        // first, I need the Model catsObjArray to render my list
        // So, Use octopus fun to make this connection
        var catsObjArray = octopus.getCatsObjArray();

        // loop over the cats
        for (var i = 0; i < catNames.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];
            // make a new cat list item and set its text
            listItem = document.createElement('div');
            listItem.textContent = cat.name;
            
            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat variable to the click event function)
            listItem.addEventListener('click', (function(catCopy) {
                return function() {
                    // need to change the active cat in Model
                    // So, Use octopus fun to make this connection
                    octopus.setActiveCat(catCopy);
                    // Update the cat view to the clicked cat from the list
                    catListVeiw.render();
                };
            })(cat));

            // finally, add the element to the list
            $(".cats-list").append(listItem);
        }
    },
};

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
