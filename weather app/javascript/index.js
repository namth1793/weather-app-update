$(".btn-date").mouseenter(function() {
    document.getElementById('date').innerHTML = Date();
});
$(".btn-date").mouseleave(function() {
    document.getElementById('date').innerHTML = "";
})

var myButton = document.getElementById("topBtn");
window.onscroll = function() { scrollfunction() };

function scrollfunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
const x = document.getElementById("mySidebar");
const y = document.getElementById("overlay");
function sidebarOpen() {
    x.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.backgroundColor = "rgba(0,0,0,0.4)"
}
function sidebarClose() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
y.addEventListener("click", sidebarClose);
