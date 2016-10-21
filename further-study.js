"use strict"

// var myImage = document.getElementById("coffee_image");
$("#coffee_image").attr("src", "static/coffee_image.jpg");

// var myRevenueMessage = document.getElementById("revenue");
// myRevenueMessage = $("#revenue");

var drinksOrdered = [];

// myImage.src = "static/coffee_beans.jpg";
$("#coffee_image").attr("src", "static/coffee_beans.jpg");

// myImage.addEventListener('click', function () { return makeCoffee("brew"); });
$("#coffee_image").on("click", makeCoffee);

// Append the drink_type to drinks_ordered and use console.log to view the output

function makeCoffee(drinkType) {
    drinksOrdered.push(drinkType);
    console.log(drinksOrdered);


    var coffees = "static/" + drinkType + ".jpg"

    var myRevenue = revenue();
    $("#revenue").html("Today's revenues: " + myRevenue); 
    // myRevenueMessage.innerHTML = "Today's revenues: " + myRevenue;

    //myImage.setAttribute('src', "static/coffee_machine.jpg");
    $("#coffee_image").attr("src", "static/coffee_machine.jpg");

    // setTimeout(function () { myImage.setAttribute('src', "static/coffee_mug.jpg"); }, 500);
    setTimeout(function () { $("#coffee_image").attr("src", coffees); }, 1500);

    // setTimeout(function () { myImage.setAttribute('src', "static/coffee_beans.jpg"); }, 1500);
    setTimeout(function () { $("#coffee_image").attr("src", "http://media1.fdncms.com/orlando/imager/u/blog/2428684/catcafechillin.gif?cb=1454770365"); }, 3500);

}


// Create variables for Espresso, Latte, and Hot Chocolate;
// and add an event listener to each that calls make_coffee
//var espresso = document.getElementById("espresso");

//var latte = document.getElementById("latte");

//var hotChocolate = document.getElementById("hot-chocolate");



// espresso.addEventListener('click', function () { return makeCoffee("espresso"); });
$("#espresso").on("click", function () { return makeCoffee("espresso"); });

// latte.addEventListener('click', function () { return makeCoffee("latte"); });
$("#latte").on("click", function () { return makeCoffee("latte"); });


// hotChocolate.addEventListener('click', function () { return makeCoffee("hot chocolate"); });
$("#hot-chocolate").on("click", function () { return makeCoffee("hot chocolate"); });



// Use this dictionary to calculate profits for the day and log them to the console.

var prices = {"brew": 2.05, "espresso": 3.25, "latte": 4.15, "hot chocolate": 2.50};

function revenue() {
    var total = 0;
    for (var i = 0; i < drinksOrdered.length; i++) {
        total += prices[drinksOrdered[i]];
    }

    var roundTotal = "$" + Number(total).toFixed(2);
    
    console.log("Total revenue = " + roundTotal);
    
    return roundTotal; 
}

