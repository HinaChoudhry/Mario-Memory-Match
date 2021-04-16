// Difficulty modal and close button 

document.getElementById("button").addEventListener("click",
    function () {
        document.querySelector(".bg-modal").style.display = "flex";
    });

document.querySelector(".close-button").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
});


// Generates number of cards based on difficulty selected

