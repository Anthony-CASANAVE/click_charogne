//Gestion automatique des cookies.
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/cookies";
    console.log()
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return meatCount;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

let addMeatButton = document.getElementById("cible");
let meatCount = document.getElementById("cliqueCredits").textContent;

//Chargement des cookies à l'ouverture de la page.
var readMeatCount = readCookie("numberOfCicks");

if (readMeatCount != null) {
    meatCount = readMeatCount;
}
else{
    meatCount = 0;
    createCookie("numberOfClicks", meatCount, 7);
}



//Truc



document.getElementById("cliqueCredits").textContent = meatCount;

addMeatButton.onclick = function () {
    meatCount++;
    
    createCookie("numberOfClicks", meatCount, 7);

    document.getElementById("cliqueCredits").textContent = meatCount;
    console.log(readMeatCount);

}
