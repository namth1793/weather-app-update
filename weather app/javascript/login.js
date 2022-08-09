function showPass() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myFocus(x) {
    x.addEventListener("click", function () {
        x.style.background = "#e5e5e5";
    });
}