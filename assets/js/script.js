// Difficulty modal and close button 

document.querySelector(".close-button").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "none";
});



// Generates number of cards based on difficulty selected
$("#selectEasy").click(function(){
    easyButton();
});

function easyButton() {
$(".medium, .hard").addClass("invisible").removeClass("visible");
};



$("#selectMedium").click(function() {
    mediumButton();
});

function mediumButton(){
    $('.medium').addClass('visible').removeClass('invisible');
    $(".hard").addClass('invisible').removeClass('visible');
};

$("#selectHard").click(function(){
    hardButton();
});

function hardButton(){
    $(".medium").addClass("visible").removeClass("invisible");
    $(".hard").addClass("visible").removeClass("invisible");
};
