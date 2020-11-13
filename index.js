window.onload = function() {
    what();

    function what() {

        var n = prompt("Enter your name", "guys");
        if (n != null) {
            document.getElementById("name").innerHTML = " " + n;
            document.getElementById("name1").innerHTML = " " + n;
        }
    }
}

window.onscroll = function() { myFunction() };

function myFunction() {
    var WS = document.body.scrollTop || document.documentElement.scrollTop;
    var h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var s = (WS / h) * 100;
    document.getElementById("myBar").style.width = s + "%";
}