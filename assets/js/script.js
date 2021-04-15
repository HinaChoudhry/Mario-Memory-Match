// Difficulty modal and close button 

document.getElementById("button").addEventListener("click",
    function () {
        document.querySelector(".bg-modal").style.display = "flex";
    });

document.querySelector(".close-button").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = "none";
});