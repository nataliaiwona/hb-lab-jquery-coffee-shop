
//var myImage = document.getElementById("coffee_image"); 
$("#coffee_image").attr("src", "static/coffee_beans.jpg");

 //var myRevenueMessage = document.getElementById("revenue");
$("#revenue")

// myImage.addEventListener('click', function () {
//     return makeCoffee();
// });
function makeCoffee() {
    
    $("#coffee_image").attr("src", "static/coffee_machine.jpg");
    
    setTimeout(function() { $("#coffee_image").attr("src", "static/coffee_mug.jpg");  }, 1500); 
     
    setTimeout(function() { $("#coffee_image").attr("src", "static/coffee_beans.jpg");}, 3500);
     
}

$('#coffee_image').on('click', makeCoffee);
