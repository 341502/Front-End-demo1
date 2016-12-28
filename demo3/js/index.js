window.onresize = function() {
    window.location.reload();
};


document.getElementById("dropdown").onclick = function() {
    var temp = document.getElementsByClassName("navbar-collapse")[0].style.display;
    if (temp == "none") {
        document.getElementsByClassName("navbar-collapse")[0].style.display = "block";
    } else {
        document.getElementsByClassName("navbar-collapse")[0].style.display = "none";
    }
};
