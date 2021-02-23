function openNav() {
    document.getElementById("respnav").style.width = "100%";
    document.getElementById("flag").style.display = "none";
}

function closeNav() {
    document.getElementById("respnav").style.width = "0";
    document.getElementById("flag").style.display = "block";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("btt").style.marginRight = "0px";
    } else {
        document.getElementById("btt").style.marginRight = "-100px";
    }
}